class Schedule < ActiveRecord::Base
  belongs_to :company
  belongs_to :user
  belongs_to :contact
  belongs_to :training
  belongs_to :lead
end
