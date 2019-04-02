import React from 'react';

const MainMenuItem = ( props ) => {
    return (
        <div>
            <a href={`/#/listings/${props.listing.id}`} className="option-links">
                <img className="camp-pic" src="https://s3.amazonaws.com/hipsterhabitat-dev/camp_hope.jpg" />
                <p className="option-title">{props.listing.title}</p>
                <p className="option-location"> New York</p>
            </a>
        </div> 
    )
}

export default MainMenuItem;