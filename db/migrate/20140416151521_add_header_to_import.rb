class AddHeaderToImport < ActiveRecord::Migration
  def change
    add_column :imports, :header, :string, array: true, default: []
  end
end
