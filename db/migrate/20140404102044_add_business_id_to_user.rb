# frozen_string_literal: true

class AddBusinessIdToUser < ActiveRecord::Migration
  def change
    add_column :users, :business_id, :integer
    add_index :users, :business_id
  end
end
