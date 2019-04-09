class AddColumnActivities < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :check_in, :string, null: false
    add_column :listings, :check_out, :string, null: false 
    add_column :listings, :is_hiking, :boolean, null: false
    add_column :listings, :is_biking, :boolean, null: false
    add_column :listings, :is_swimming, :boolean, null: false
    add_column :listings, :is_fishing, :boolean, null: false
    add_column :listings, :is_horseback, :boolean, null: false
    add_column :listings, :is_climbing, :boolean, null: false
  end
end
