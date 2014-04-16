class CreateImports < ActiveRecord::Migration
  def change
    create_table :imports do |t|
      t.integer :user_id
      t.string :to

      t.timestamps
    end
    add_index :imports, :user_id
  end
end
