class AddColumnLocation < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :location, :string, null: false
  end
end
