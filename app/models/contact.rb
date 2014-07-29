class Contact < ActiveRecord::Base
  belongs_to :company
  belongs_to :user
  has_many   :schedules
  has_many   :leads
  has_many   :trainings, through: :leads
  
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller.current_user }
end
 