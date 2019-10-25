class AddColumnNumGuestsToAppointments < ActiveRecord::Migration[5.2]
  def change
    add_column :appointments, :num_guests, :integer, null: false
  end
end
