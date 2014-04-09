class AddTrainingIdToNotes < ActiveRecord::Migration
  def change
    add_column :notes, :training_id, :integer
    add_index :notes, :training_id
  end
end
