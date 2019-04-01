# == Schema Information
#
# Table name: listing_photos
#
#  id         :bigint(8)        not null, primary key
#  listing_id :integer          not null
#  img_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ListingPhoto < ApplicationRecord
    validates :listing_id, :img_url, presence: true

    belongs_to :listing 
    has_one_attached :photo
end
