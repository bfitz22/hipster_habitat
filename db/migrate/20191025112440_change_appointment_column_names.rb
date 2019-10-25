class ChangeAppointmentColumnNames < ActiveRecord::Migration[5.2]
  def change
    rename_column :appointments, :client_id, :user_id
    rename_column :appointments, :booking_id, :listing_id
  end
end
