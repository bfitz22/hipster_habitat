class Api::ListingsController < ApplicationController
    def index
        if params[:filters] 
            @listings = Listing.in_bounds(params[:bounds]).with_attached_photos.all
        else
            @listings = Listing.with_attached_photos.all
        end
    end

    def show
        @listing = Listing.with_attached_photos.find(params[:id])
        @host = User.find(@listing.host_id)
    end

    def create 
        @listing = Listing.create!(listing_params)
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
            photos: []
        )
    end
end

# store.getState().entities.users[listings.host_id]