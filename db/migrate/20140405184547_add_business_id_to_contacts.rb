# frozen_string_literal: true

class AddBusinessIdToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :business_id, :integer
    add_index :contacts, :business_id
  end
end
