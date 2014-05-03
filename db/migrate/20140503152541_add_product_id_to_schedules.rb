class AddProductIdToSchedules < ActiveRecord::Migration
  def change
    add_column :schedules, :product_id, :integer
    add_index :schedules, :product_id
  end
end
