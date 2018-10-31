# frozen_string_literal: true

class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name

      t.timestamps
    end
  end
end
