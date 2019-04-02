json.extract! listing, :id, :host_id, :title, :description, :price,
:pets_allowed, :campfires_allowed, :is_water, :is_toilets, 
:is_showers, :is_wifi, :max_capacity, :lat, :lng, :location

listing_map = listing.photos.map { |photo| url_for(photo) }
json.listing_photos listing_map
