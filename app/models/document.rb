class Document < ActiveRecord::Base
  has_attached_file :data  
  do_not_validate_attachment_file_type :data
end
