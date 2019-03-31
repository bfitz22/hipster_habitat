class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer "host_id", null: false
      t.string "title", null: false
      t.text "description", null: false 
      t.float "price", null: false
      t.string "location", null: false 
      t.boolean "pets_allowed", null: false
      t.boolean "campfires_allowed", null: false 
      t.boolean "is_water", null: false
      t.boolean "is_toilets", null: false
      t.boolean "is_showers", null: false
      t.boolean "is_wifi", null: false 
      t.integer "max_capacity", null: false
      t.timestamps
    end
    add_index :listings, :host_id 
  end
end
