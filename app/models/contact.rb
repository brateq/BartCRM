class Contact < ActiveRecord::Base
  belongs_to :company
  belongs_to :user
  has_many :schedules
  has_many :leads
  has_many :trainings, through: :leads

  validates :surname, presence: true

  include PublicActivity::Model
  tracked owner: proc { |controller, _model| controller.current_user }

  attr_accessor :work_in_company

  def self.import(file, user_business, _column)
    allowed_attributes = %w(name surname work_in_company mobile_number office_number street postalcode
                            city countrydont_call newslatter know_from description email)
    spreadsheet = open_spreadsheet(file)
    header = spreadsheet.row(1)
    (2..spreadsheet.last_row).each do |i|
      row = Hash[[header, spreadsheet.row(i)].transpose]
      product = new
      product.attributes = row.to_hash.select { |k, _v| allowed_attributes.include? k }
      product.business_id = user_business
      product.company_id = Company.find_by(business_id: user_business, name: product.work_in_company.to_s).id
      product.save!
    end
  end

  def self.open_spreadsheet(file)
    case File.extname(file.original_filename)
    when '.csv' then Roo::CSV.new(file.path)
    when '.xls' then Roo::Excel.new(file.path, nil, :ignore)
    when '.xlsx' then Roo::Excelx.new(file.path, nil, :ignore)
    else fail "Unknown file type: #{file.original_filename}"
    end
  end
end
