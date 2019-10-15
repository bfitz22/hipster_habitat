import React from 'react';

const SearchResults = ( props ) => {
    var pic = props.listing.listing_photos[0];

    return (
        <>
            <a href={`/#/listings/${props.listing.id}`} className="result-link">
                <p>{props.listing.title}</p>
                {/* <img src={pic} /> */}
            </a>
        </>
    )
}

export default SearchResults; 