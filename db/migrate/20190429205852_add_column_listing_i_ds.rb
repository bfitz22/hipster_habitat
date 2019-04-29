class AddColumnListingIDs < ActiveRecord::Migration[5.2]
  def change
    add_column :amenities, :listing_id, :integer, null: false
  end
end
