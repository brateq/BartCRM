class CreateImports < ActiveRecord::Migration
  def change
    create_table :imports do |t|
      t.integer :user_id
      t.string :category

      t.timestamps
    end
    add_index :imports, :user_id
  end
end
