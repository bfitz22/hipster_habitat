class ChangeAmenityColumnNames < ActiveRecord::Migration[5.2]
  def change
    rename_column :amenities, :pets_allowed, :is_pets
    rename_column :amenities, :campfires_allowed, :is_campfires
  end
end
