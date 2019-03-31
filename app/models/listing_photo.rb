class ListingPhoto < ApplicationRecord
    validates :listing_id, :img_url, presence: true

    belongs_to :listing 
    has_one_attached :photo
end