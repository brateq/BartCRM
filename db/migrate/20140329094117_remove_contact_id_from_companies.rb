# frozen_string_literal: true

class RemoveContactIdFromCompanies < ActiveRecord::Migration
  def change
    remove_column :companies, :contact_id, :integer
  end
end
