# frozen_string_literal: true

class AddProductIdToDocuments < ActiveRecord::Migration
  def change
    add_column :documents, :product_id, :integer
    add_index :documents, :product_id
  end
end
