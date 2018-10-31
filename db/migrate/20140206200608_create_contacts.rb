# frozen_string_literal: true

class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :surname
      t.integer :mobile_number
      t.integer :office_number
      t.string :street
      t.string :postalcode
      t.string :city
      t.string :country
      t.boolean :dont_call
      t.string :newslatter
      t.integer :created_by
      t.integer :modified_by
      t.string :know_from
      t.text :description
      t.string :email
      t.integer :user_id
      t.integer :company_id

      t.timestamps
    end
    add_index :contacts, :user_id
    add_index :contacts, :company_id
  end
end
