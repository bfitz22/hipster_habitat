# == Schema Information
#
# Table name: appointments
#
#  id         :bigint(8)        not null, primary key
#  booking_id :integer          not null
#  client_id  :integer          not null
#  start      :date             not null
#  end        :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Appointment < ApplicationRecord
    validates :client_id, :booking_id, :start, :end, presence: true

    belongs_to :client, 
        primary_key: :id,
        foreign_key: :client_id, 
        class_name: :User

    belongs_to :booking, 
        primary_key: :id, 
        foreign_key: :booking_id,
        class_name: :Listing 
end
