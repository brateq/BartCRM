class Company < ActiveRecord::Base
  has_many :contacts
  belongs_to :user
  accepts_nested_attributes_for :contacts
  require 'csv'
  def self.import(file)
    CSV.foreach(file.path, headers: true) do |row|
      Company.create! row.to_hash
    end
  end
end
