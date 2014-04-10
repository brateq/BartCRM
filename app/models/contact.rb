class Contact < ActiveRecord::Base
  belongs_to :company
  belongs_to :user
  has_many   :schedules
  has_many   :leads
  has_many   :trainings, through: :leads
  # validate presence :name
end
 