class Lead < ActiveRecord::Base
  belongs_to :user
  belongs_to :company
  belongs_to :contact
  belongs_to :training
  belongs_to :product
  has_many :notes
  has_many :schedules  
end
 