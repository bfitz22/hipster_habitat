import React from 'react';

class ListingDetail extends React.Component {
    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId);

    }

    render() {
        const { listing } = this.props;

        if (!listing) return null; 

        return (
            // slideshow
            <div className="listing-show-item">
                <div className="listing-show-title">
                    <h1>{listing.title}</h1>
                </div>
                <div className="listing-show-description">
                    {/* <span>{`user.${host_id}`}</span> */}
                    <p>{listing.description}</p>
                </div>
                <div className="info-boxes">
                    <div className="campsite-area">
                        Campsite Area 
                        <li>{listing.max_capacity}</li>
                    </div>
                    <div className="essentials">
                        Essentials
                        <li>{listing.campfires_allowed}</li>
                        <li>{listing.pets_allowed}</li>
                    </div>
                    <div className="amenities">
                        Amenities
                        <li>{listing.is_water}</li>
                        <li>{listing.is_toilets}</li>
                        <li>{listing.is_showers}</li>
                        <li>{listing.is_wifi}</li>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingDetail; 