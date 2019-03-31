class Listing < ApplicationRecord
    validates :host_id, :title, :description, :price, :max_capacity, :lat, :lng, presence: true
    validates :pets_allowed, :campfires_allowed, :is_water, :is_toilets, :is_showers, :is_wifi, inclusion: { in: [true, false] }

    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User

    has_many :listing_photos,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :ListingPhoto 
    
    # has_many :bookings
    # has_many activities,
        # through: :listing_activities,
        # source: :activities
    # has_many :reviews
end