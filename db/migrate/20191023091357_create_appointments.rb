class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.integer "booking_id", null: false
      t.integer "client_id", null: false 
      t.date "start", null: false
      t.date "end", null: false 

      t.timestamps
    end
    add_index :appointments, :booking_id
    add_index :appointments, :client_id 
  end
end
