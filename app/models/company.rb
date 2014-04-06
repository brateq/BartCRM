class Company < ActiveRecord::Base
  has_many :contacts
  belongs_to :user
  has_many :calls
  accepts_nested_attributes_for :contacts
  before_save :add_http
  
  require 'csv'
  def self.import(file)
    CSV.foreach(file.path, headers: true) do |row|
      Company.create! row.to_hash
    end
  end
  
  protected
  
  def add_http
    unless self.www[/\Ahttp:\/\//] || self.www[/\Ahttps:\/\//]
      self.www = "http://#{self.www}"
    end
  end
end
