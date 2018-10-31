# frozen_string_literal: true

class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.datetime :start
      t.datetime :end
      t.string :code
      t.integer :user_id
      t.integer :business_id
      t.text :description
      t.string :stage
      t.string :place
      t.string :category

      t.timestamps
    end
    add_index :products, :user_id
  end
end
