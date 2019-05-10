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
        debugger
        @listing = Listing.create!(listing_params)
        Amenity.create({listing_id => @listing.id,
            @listing.amenity[0][0] => @listing.amenity[0][1],
            @listing.amenity[1][0] => @listing.amenity[1][1],
            @listing.amenity[2][0] => @listing.amenity[2][1],
            @listing.amenity[3][0] => @listing.amenity[3][1],
            @listing.amenity[4][0] => @listing.amenity[4][1],
            @listing.amenity[5][0] => @listing.amenity[5][1],
            @listing.amenity[6][0] => @listing.amenity[6][1],
            @listing.amenity[7][0] => @listing.amenity[7][1],
            @listing.amenity[8][0] => @listing.amenity[8][1],
            @listing.amenity[9][0] => @listing.amenity[9][1],
            @listing.amenity[10][0] => @listing.amenity[10][1],
            @listing.amenity[11][0] => @listing.amenity[11][1]
        })
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
            photos: []
        )
    end
end