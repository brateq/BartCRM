# frozen_string_literal: true

class AddCryptedPasswordToUsers < ActiveRecord::Migration
  def change
    add_column :users, :crypted_password, :string
    add_column :users, :salt, :string
  end
end
