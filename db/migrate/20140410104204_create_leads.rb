class CreateLeads < ActiveRecord::Migration
  def change
    create_table :leads do |t|
      t.string :status
      t.integer :amount
      t.integer :user_id
      t.integer :company_id
      t.integer :training_id
      t.integer :contact_id
      t.integer :note_id
      t.integer :schedule_id

      t.timestamps
    end
    add_index :leads, :user_id
    add_index :leads, :company_id
    add_index :leads, :training_id
    add_index :leads, :contact_id
    add_index :leads, :note_id
    add_index :leads, :schedule_id
  end
end
