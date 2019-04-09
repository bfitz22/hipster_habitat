import React from 'react';

const ListingLocationForm = () => {
    return (
        <div className="form-body">
            <div className="form-title">
                <h2>What are the coordinates of your Listing?</h2>
                <input type="text" placeholder="latitude"/>
                <input type="text" placeholder="longitude"/>
            </div>
            <div>
                <button>Ok</button>
            </div>
        </div>
    )
} 

export default ListingLocationForm;