class Import < ActiveRecord::Base
  has_attached_file :base  
  do_not_validate_attachment_file_type :base
end
