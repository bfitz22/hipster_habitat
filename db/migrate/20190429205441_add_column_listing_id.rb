class AddColumnListingId < ActiveRecord::Migration[5.2]
  def change
    add_column :amenities, :listing_id, :integer
  end
end
