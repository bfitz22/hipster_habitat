class Api::ListingPhotosController < ApplicationController
    
    private

    def photo_params
        params.require(:listing_photo).permit(:img_url)
    end
end