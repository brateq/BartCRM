class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :name
      t.string :surname
      t.string :email
      t.integer :phone
      t.integer :role_id

      t.timestamps
    end
  end
end
