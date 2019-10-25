json.extract! listing, :id, :host_id, :title, :description, :price, 
:max_capacity, :lat, :lng, :location, :site, :amenity, :appointments



listing_map = listing.photos.map { |photo| url_for(photo) }
json.listing_photos listing_map
