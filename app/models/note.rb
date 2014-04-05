class Note < ActiveRecord::Base
  belongs_to :user
  belongs_to :company
  belongs_to :contact
end
