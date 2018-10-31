# frozen_string_literal: true

class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.text :text
      t.string :action_type
      t.integer :user_id
      t.integer :company_id
      t.integer :contact_id

      t.timestamps
    end
    add_index :notes, :user_id
    add_index :notes, :company_id
    add_index :notes, :contact_id
  end
end
