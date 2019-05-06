class AddColumnSite < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :type
    add_column :listings, :site, :string, null: false
  end
end
