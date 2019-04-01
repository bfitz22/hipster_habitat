class Api::ListingPhotosController < ApplicationController
    def show
        
    end
    
    private

    def photo_params
        params.require(:listing_photo).permit(:img_url)
    end
end