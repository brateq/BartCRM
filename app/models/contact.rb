class Contact < ActiveRecord::Base
  belongs_to :company
  
  # validate presence :name
end
