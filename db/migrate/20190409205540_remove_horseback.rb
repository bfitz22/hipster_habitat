class RemoveHorseback < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :is_horseback
  end
end
