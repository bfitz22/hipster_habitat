class RemoveColumnListingId < ActiveRecord::Migration[5.2]
  def change
    remove_column :amenities, :listing_id
  end
end
