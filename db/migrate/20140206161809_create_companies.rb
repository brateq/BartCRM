class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :www
      t.string :email
      t.string :legal_form
      t.integer :phone, limit: 8
      t.integer :fax, limit: 8
      t.string :street
      t.string :postcode
      t.string :city
      t.string :country
      t.integer :krs, limit: 8
      t.text :description
      t.integer :nip, limit: 8
      t.integer :regon, limit: 8
      t.string :progress
      t.string :type_of_training
      t.string :trade
      t.boolean :electronic_invoice
      t.string :wojewodztwo
      t.integer :contact_id
      t.integer :user_id

      t.timestamps
    end
    add_index :companies, :contact_id
    add_index :companies, :user_id
  end
end
