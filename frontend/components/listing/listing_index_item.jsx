import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ( props ) => {
    debugger
    return (
    <li className="listing-index-item">
        
            <span>{props.listing.title}</span>
            <span>{props.listing.description}</span>
        
    </li>
    )
};

export default ListingIndexItem;

/* <Link to={`/listings/${listing.id}`}></Link> */