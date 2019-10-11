import React from 'react';

const SearchResults = ( props ) => {
    var pic = props.listing.listing_photos[0];

    return (
        <div>
            <a href={`/#/listings/${props.listing.id}`}>
                <p>{props.listing.title}</p>
                {/* <img src={pic} /> */}
            </a>
        </div>
    )
}

export default SearchResults; 