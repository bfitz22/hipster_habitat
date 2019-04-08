# == Schema Information
#
# Table name: listings
#
#  id                :bigint(8)        not null, primary key
#  host_id           :integer          not null
#  title             :string           not null
#  description       :text             not null
#  price             :float            not null
#  pets_allowed      :boolean          not null
#  campfires_allowed :boolean          not null
#  is_water          :boolean          not null
#  is_toilets        :boolean          not null
#  is_showers        :boolean          not null
#  is_wifi           :boolean          not null
#  max_capacity      :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  lat               :float            not null
#  lng               :float            not null
#  location          :string           not null
#

class Listing < ApplicationRecord
    validates :host_id, :title, :description, :price, :max_capacity, :lat, :lng, presence: true
    validates :pets_allowed, :campfires_allowed, :is_water, :is_toilets, :is_showers, :is_wifi, inclusion: { in: [true, false] }

    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User

    has_many_attached :photos
    
    # has_many :bookings
    # has_many activities,
        # through: :listing_activities,
        # source: :activities
    # has_many :reviews

    def self.in_bounds(bounds)
        self.all.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng < ?", bounds[:northEast][:lng])
            .where("lng > ?", bounds[:southWest][:lng])
    end
end
