class AddBusinessIdToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :business_id, :integer
    add_index :companies, :business_id
  end
end
