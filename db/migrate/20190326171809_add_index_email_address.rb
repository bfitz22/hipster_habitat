class AddIndexEmailAddress < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :email_address, unique: true  
  end
end
