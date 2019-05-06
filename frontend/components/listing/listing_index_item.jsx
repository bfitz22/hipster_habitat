import React from 'react';
import classNames from 'classnames';

const ListingIndexItem = ( props ) => {
  // var pic = props.listing.listing_photos[Math.floor(Math.random() * props.listing.listing_photos.length)];
  // source - https://www.kirupa.com/html5/picking_random_item_from_array.htm
  var pic = props.listing.listing_photos[0];

  let icon;
  if (props.listing.site === "cabin") {
    icon = ["fas fa-home", "Cabin provided."]
  } else if (props.listing.site === "tent") {
    icon = ["fas fa-campground", "Bring your own tents."]
  } else {
    icon = ["fas fa-shuttle-van", "Bring your own vans, trailers, and rvs."]
  }

    return (
    <>
    <div className="choice-div">
      <a href={`/#/listings/${props.listing.id}`} className="option-links">
        <img className="choice-pic" src={pic} />
        <p className="option-title">{props.listing.title}
          <i className={classNames(icon[0], "site-image")}></i>
        </p>
        <p className="choice-location"> {props.listing.location}</p>
        <p className="choice-price">${props.listing.price}/night</p>
      </a>
    </div> 
    </>
    )
};

export default ListingIndexItem;

