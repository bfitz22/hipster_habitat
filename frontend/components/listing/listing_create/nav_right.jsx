import React from 'react';

const NavRight = ( props ) => {
    let paths = [
        "/listing_create/",
        "/listing_create/location",
        "/listing_create/price",
        "/listing_create/site_type",
        "/listing_create/amenities",
        "/listing_create/activities",
        "/listing_create/check_in",
        "/listing_create/confirm",
        "/listing_create/photos"
    ]

    if (props.next) {
        return (
            <div className="nav-arrow" onClick={() => {location.href = props.next}}>
                <i className="fas fa-chevron-right"></i>
            </div>
        )
    } else {
        return (
            <div className="nav-arrow-grey">
                <i className="fas fa-chevron-right" aria-hidden="true"></i>
            </div>
        )
    } 
}

export default NavRight;