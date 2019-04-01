import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ( props ) => {
    return (
    <div className="listing-index-item">
        <Link to={`/listings/${props.listing.id}`}>
            {/* <img src={`${props.listing.listing_photos[0]}`}/> */}
            <span>{props.listing.title}</span>
            <span>${props.listing.price}/night</span>
        </Link>
    </div>
    )
};

export default ListingIndexItem;

