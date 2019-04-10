# == Schema Information
#
# Table name: provisions
#
#  id         :bigint(8)        not null, primary key
#  listing_id :integer          not null
#  amenity_id :integer          not null
#

class Provision < ApplicationRecord
    validates :listing_id, :amenity_id, presence: true

    belongs_to :amenity

    belongs_to :listing
end
