# == Schema Information
#
# Table name: appointments
#
#  id         :bigint(8)        not null, primary key
#  listing_id :integer          not null
#  user_id    :integer          not null
#  start      :date             not null
#  end        :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  num_guests :integer          not null
#

class Appointment < ApplicationRecord
    validates :user_id, :listing_id, :start, :end, :num_guests, presence: true

    belongs_to :client, 
        primary_key: :id,
        foreign_key: :user_id, 
        class_name: :User

    belongs_to :booking, 
        primary_key: :id, 
        foreign_key: :listing_id,
        class_name: :Listing 
end
