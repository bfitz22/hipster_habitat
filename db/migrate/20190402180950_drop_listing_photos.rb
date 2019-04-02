class DropListingPhotos < ActiveRecord::Migration[5.2]
  def change
    drop_table :listing_photos
  end
end
