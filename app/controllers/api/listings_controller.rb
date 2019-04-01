class Api::ListingsController < ApplicationController
    def index
        @listings = Listing.all
        # render 'api/listings/index'
    end

    def show
        @listing = Listing.find(params[:id])
    end

    def create 
        @bench = Listing.create!(listing_params)
    end

    private

    # def capacity_range
    #     (2..params[:max_capacity])
    # end

    def listing_params
        params.require(:listing).permit(
            :title,
            :description,
            :price,
            :pets_allowed,
            :campfires_allowed, 
            :is_water,
            :is_toilets,
            :is_showers,
            :is_wifi,
            :max_capacity,
            :lat,
            :lng,
            :listing_photos
        )
    end
end