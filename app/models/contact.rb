class Contact < ActiveRecord::Base
  belongs_to :company
  belongs_to :user
  # validate presence :name
end
