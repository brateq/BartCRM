# frozen_string_literal: true

class CreateCalls < ActiveRecord::Migration
  def change
    create_table :calls do |t|
      t.string :subject
      t.string :call_type
      t.datetime :time
      t.integer :user_id
      t.integer :company_id
      t.integer :contact_id

      t.timestamps
    end
    add_index :calls, :user_id
    add_index :calls, :company_id
    add_index :calls, :contact_id
  end
end
