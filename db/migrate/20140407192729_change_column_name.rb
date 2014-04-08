class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :schedules, :type, :action_type
  end
end
