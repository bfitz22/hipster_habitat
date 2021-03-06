# == Schema Information
#
# Table name: amenities
#
#  id           :bigint(8)        not null, primary key
#  is_pets      :boolean          not null
#  is_campfires :boolean          not null
#  is_water     :boolean          not null
#  is_toilets   :boolean          not null
#  is_showers   :boolean          not null
#  is_wifi      :boolean          not null
#  is_hiking    :boolean          not null
#  is_biking    :boolean          not null
#  is_swimming  :boolean          not null
#  is_fishing   :boolean          not null
#  is_horseback :boolean          not null
#  is_climbing  :boolean          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  listing_id   :integer          not null
#

class Amenity < ApplicationRecord
    validates :listing_id, presence: true

    validates :is_pets, :is_campfires, :is_water, :is_toilets, :is_showers, :is_wifi,
    :is_hiking, :is_biking, :is_swimming, :is_fishing, :is_horseback, :is_climbing, inclusion: { in: [true, false] }

    belongs_to :listing

end
