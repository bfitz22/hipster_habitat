json.extract! listing, :id, :host_id, :title, :description, :price, 
:max_capacity, :lat, :lng, :location

json.partial! 'api/amenities/amenity', amenity: listing.amenities

listing_map = listing.photos.map { |photo| url_for(photo) }
json.listing_photos listing_map
