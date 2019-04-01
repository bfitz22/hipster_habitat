json.partial! '/api/listings/listing', listing: @listing

json.listingPhotos do 
    @listing.photos.each do |photo|
        json.set! photo.id do 
            json.extract! photo, :id, :img_url
        end
    end
end


