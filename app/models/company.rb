class Company < ActiveRecord::Base
  has_many :contacts
  belongs_to :user
  has_many :schedules
  has_many :leads
  
  accepts_nested_attributes_for :contacts
  before_save :add_http
  
  def self.header(file)
    s = open_spreadsheet(file)
    return header = s.row(1)  
  end
  
  def self.prepare(file)
    s = open_spreadsheet(file)
    return sample = s.row(2)
  end
  
  def self.import(file, header)
    allowed_attributes = ["name","user_id","business_id"]
    spreadsheet = open_spreadsheet(file)
    (2..spreadsheet.last_row).each do |i|
      row = Hash[[header, spreadsheet.row(i)].transpose]
      product = new
      product.attributes = row.to_hash.select { |k,v| allowed_attributes.include? k }
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
    unless self.www.nil?
      unless self.www[/\Ahttp:\/\//] || self.www[/\Ahttps:\/\//]
        self.www = "http://#{self.www}"
      end
    end
  end
      
end
  