import React from 'react';

const MainMenuItem = ( props ) => {
  var pic = props.listing.listing_photos[0];

    return (
        <div>
            <a href={`/#/listings/${props.listing.id}`} className="option-links">
                <img className="camp-pic" src={pic} />
                <p className="option-title">{props.listing.title}</p>
                <p className="option-location"> {props.listing.location}</p>
            </a>
        </div> 
    )
}

export default MainMenuItem;