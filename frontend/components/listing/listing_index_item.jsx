import React from 'react';

const ListingIndexItem = ( props ) => {
    return (
    <div className="choice-div">
      <a href={`/#/listings/${props.listing.id}`} className="option-links">
        <img className="choice-pic" src={props.listing.listing_photos[0]} />
        <p className="option-title">{props.listing.title}</p>
        <p className="option-location"> {props.listing.location}</p>
      </a>
    </div> 
    )
};

export default ListingIndexItem;

