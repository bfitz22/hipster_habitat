class RemoveBooleans < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :pets_allowed
    remove_column :listings, :campfires_allowed
    remove_column :listings, :is_water
    remove_column :listings, :is_toilets
    remove_column :listings, :is_showers
    remove_column :listings, :is_wifi
    remove_column :listings, :is_hiking
    remove_column :listings, :is_biking
    remove_column :listings, :is_swimming
    remove_column :listings, :is_fishing
    remove_column :listings, :is_climbing
  end
end
