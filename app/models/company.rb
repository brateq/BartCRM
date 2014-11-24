class Company < ActiveRecord::Base
  has_many :contacts
  belongs_to :user
  has_many :schedules
  has_many :leads
  
  acts_as_taggable_on :tags
  
  accepts_nested_attributes_for :contacts, :reject_if => :all_blank
  before_save :add_http
  
  validates :name, presence: true 
  
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller.current_user }

  def self.prepare(file, row_number)
    s = open_spreadsheet(file)
    return data = s.row(row_number)
  end
  
  def self.import(file, user_business, column)
    allowed_attributes = ["name", "address", "phone", "www", "email",	"legal_form",	"street",	"postcode",	"city",	"country", "krs",	"decription",	"nip", "regon",	"progress",	"type_of_training",	"trade",	"electronic_invoice",	"tag_list",	"wojewodztwo"]
    spreadsheet = open_spreadsheet(file)
    header = spreadsheet.row(1)
    (2..spreadsheet.last_row).each do |i|
      row = Hash[[header, spreadsheet.row(i)].transpose]
      product = new
      product.attributes = row.to_hash.select { |k,v| allowed_attributes.include? k }
      product.business_id = user_business
      product.save!
    end
  end
  
  def self.open_spreadsheet(file)
    case File.extname(file.original_filename)
    when '.csv' then Roo::CSV.new(file.path)
    when '.xls' then Roo::Excel.new(file.path, nil, :ignore)
    when '.xlsx' then Roo::Excelx.new(file.path, nil, :ignore)
    else raise "Unknown file type: #{file.original_filename}"
    end
  end
  protected
  
  def add_http
    unless self.www.empty?
      unless self.www[/\Ahttp:\/\//] || self.www[/\Ahttps:\/\//]
        self.www = "http://#{self.www}"
      end
    end
  end
      
end
  