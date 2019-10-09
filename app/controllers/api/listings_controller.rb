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
        @listing = Listing.new(listing_params)

        if @listing.save
            amenity = JSON.parse(amenity_params[:amenity])
            @listing.create_amenity(amenity)
            render 'api/listings/show'
        else
            render json: @listing.errors.full_messages, status: 400
        end
    end

    private

    # def capacity_range
    #     (2..params[:max_capacity])
    # end


    def listing_params
        params.require(:listing).permit(
            :host_id,
            :title,
            :description,
            :price,
            :max_capacity,
            :site,
            :lat,
            :lng,
            :location,
            :check_in,
            :check_out,
            :photos
        )
    end

    def amenity_params
        params.require(:listing).permit(
            :amenity
        )
    end
end