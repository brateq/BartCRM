class AddAttachmentBaseToImports < ActiveRecord::Migration
  def self.up
    change_table :imports do |t|
      t.attachment :base
    end
  end

  def self.down
    drop_attached_file :imports, :base
  end
end
