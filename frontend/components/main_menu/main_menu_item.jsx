import React from 'react';
import classNames from 'classnames';

const MainMenuItem = ( props ) => {
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
        <div>
            <a href={`/#/listings/${props.listing.id}`} className="option-links">
                <img className="camp-pic" src={pic} />
                <p className="option-title">{props.listing.title}
                    <i className={classNames(icon[0], "site-image")}></i>
                </p>
                <p className="option-location"> {props.listing.location}</p>
            </a>
        </div> 
    )
}

export default MainMenuItem;