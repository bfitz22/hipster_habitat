# == Schema Information
#
# Table name: listings
#
#  id           :bigint(8)        not null, primary key
#  host_id      :integer          not null
#  title        :string           not null
#  description  :text             not null
#  price        :float            not null
#  max_capacity :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  lat          :float            not null
#  lng          :float            not null
#  location     :string           not null
#  check_in     :string           not null
#  check_out    :string           not null
#  site         :string           not null
#

class Listing < ApplicationRecord
    validates :host_id, :title, :description, :price, :max_capacity, :lat, :lng, presence: true

    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User

    has_many_attached :photos

    has_one :amenity
    
    # has_many :reviews

    def self.in_bounds(bounds)
        self.all.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng < ?", bounds[:northEast][:lng])
            .where("lng > ?", bounds[:southWest][:lng])
    end
end
