import React from 'react';
import classNames from 'classnames';

const SearchResults = ( props ) => {
    let icon;
    if (props.listing.site === "cabin") {
        icon = "fas fa-home"
    } else if (props.listing.site === "tent") {
        icon = "fas fa-campground"
    } else {
        icon = "fas fa-shuttle-van"
    }

    return (
        <>
            <a href={`/#/listings/${props.listing.id}`} className="result-link">
                <p className="ind-result">
                    <i className={classNames(icon, "result-icon")}></i>
                    {props.listing.title}
                </p>
            </a>
        </>
    )
}

export default SearchResults; 