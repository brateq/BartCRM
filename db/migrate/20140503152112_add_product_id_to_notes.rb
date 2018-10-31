# frozen_string_literal: true

class AddProductIdToNotes < ActiveRecord::Migration
  def change
    add_column :notes, :product_id, :integer
    add_index :notes, :product_id
  end
end
