# frozen_string_literal: true

class AddTrainingIdToSchedules < ActiveRecord::Migration
  def change
    add_column :schedules, :training_id, :integer
    add_index :schedules, :training_id
  end
end
