# frozen_string_literal: true

class AddCategoryToTrainings < ActiveRecord::Migration
  def change
    add_column :trainings, :category, :string
  end
end
