class AddProductIdToLead < ActiveRecord::Migration
  def change
    add_column :leads, :product_id, :integer
    add_index :leads, :product_id
  end
end
