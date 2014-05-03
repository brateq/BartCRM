class Product < ActiveRecord::Base
  belongs_to :user
  has_many :notes
  has_many :schedules
  has_and_belongs_to_many :companies
  has_many :leads
  has_many :contacts, through: :leads
  
end
