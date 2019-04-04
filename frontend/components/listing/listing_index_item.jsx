import React from 'react';

const ListingIndexItem = ( props ) => {
  var pic = props.listing.listing_photos[Math.floor(Math.random() * props.listing.listing_photos.length)];
  // source - https://www.kirupa.com/html5/picking_random_item_from_array.htm
    return (
    <div className="choice-div">
      <a href={`/#/listings/${props.listing.id}`} className="option-links">
        <img className="choice-pic" src={pic} />
        <p className="option-title">{props.listing.title}</p>
        <p className="choice-location"> {props.listing.location}</p>
        <p className="choice-price">${props.listing.price}/night</p>
      </a>
    </div> 
    )
};

export default ListingIndexItem;

