class Contact < ActiveRecord::Base
  belongs_to :company
  belongs_to :user
  has_many   :schedules
  # validate presence :name
end
