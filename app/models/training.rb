class Training < ActiveRecord::Base
  belongs_to :user
  has_many :notes
  has_many :schedules
end