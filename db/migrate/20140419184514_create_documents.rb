# frozen_string_literal: true

class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.integer :user_id
      t.integer :company_id
      t.integer :contact_id
      t.integer :lead_id
      t.integer :training_id

      t.timestamps
    end
    add_index :documents, :user_id
    add_index :documents, :company_id
    add_index :documents, :contact_id
    add_index :documents, :lead_id
    add_index :documents, :training_id
  end
end
