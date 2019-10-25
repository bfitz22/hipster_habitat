class RemoveCheckInFromListings < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :check_in
    remove_column :listings, :check_out
  end
end
