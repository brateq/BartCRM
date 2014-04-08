class CreateSchedules < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
      t.string :type
      t.string :subject
      t.datetime :time
      t.integer :company_id
      t.integer :contact_id
      t.integer :user_id

      t.timestamps
    end
    add_index :schedules, :company_id
    add_index :schedules, :contact_id
    add_index :schedules, :user_id
  end
end
