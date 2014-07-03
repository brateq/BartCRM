class CreateTrainings < ActiveRecord::Migration
  def change
    create_table :trainings do |t|
      t.string :topic
      t.integer :price
      t.datetime :start
      t.datetime :end
      t.string :training_code
      t.integer :user_id
      t.text :description
      t.string :stage
      t.string :place
      t.integer :company_id
      t.integer :business_id

      t.timestamps
    end
    add_index :trainings, :user_id
    add_index :trainings, :company_id
  end
end
