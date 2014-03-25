class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :www
      t.string :email
      t.string :legal_form
      t.integer :phone
      t.string :street
      t.string :postcode
      t.string :city
      t.string :country
      t.integer :krs
      t.text :decription
      t.integer :nip
      t.integer :regon
      t.string :progress
      t.string :type_of_training
      t.string :trade
      t.boolean :electronic_invoice
      t.integer :contact_id
      t.integer :user_id

      t.timestamps
    end
    add_index :companies, :contact_id
    add_index :companies, :user_id
  end
end
