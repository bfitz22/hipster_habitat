class CreateProvisions < ActiveRecord::Migration[5.2]
  def change
    create_table :provisions do |t|
      t.integer "listing_id", null: false
      t.integer "amenity_id", null: false
    end
  end
end
