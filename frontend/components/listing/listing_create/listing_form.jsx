import React from 'react';

const ListingForm = () => {
    return (
        <div className="form-body">
            <div className="form-title">
                <h2>What is the Title of your Listing?</h2>
                <input type="text"/>
            </div>
            <div>
                <h2>Describe your Listing</h2>
                <textarea type="text"></textarea>
            </div>
            <div>
                <button>Ok</button>
            </div>
        </div>
    )
} 

export default ListingForm;