class AddColumnType < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :type, :string, null: false
  end
end
