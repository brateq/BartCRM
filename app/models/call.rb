class Call < ActiveRecord::Base
  belongs_to :company
  belongs_to :user
  belongs_to :contact
end
