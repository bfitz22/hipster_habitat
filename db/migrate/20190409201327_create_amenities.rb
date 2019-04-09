class CreateAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities do |t|
    t.boolean "pets_allowed", null: false
    t.boolean "campfires_allowed", null: false
    t.boolean "is_water", null: false
    t.boolean "is_toilets", null: false
    t.boolean "is_showers", null: false
    t.boolean "is_wifi", null: false
    t.boolean "is_hiking", null: false
    t.boolean "is_biking", null: false
    t.boolean "is_swimming", null: false
    t.boolean "is_fishing", null: false
    t.boolean "is_horseback", null: false
    t.boolean "is_climbing", null: false
    t.timestamps
    end
  end
end
