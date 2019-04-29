class DropProvisions < ActiveRecord::Migration[5.2]
  def change
    drop_table :provisions
  end
end
