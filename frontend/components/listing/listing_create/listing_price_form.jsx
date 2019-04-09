import React from 'react';

const ListingPriceForm = () => {
    return (
        <div className="form-body">
            <div className="form-title">
                <h2>What is the Maximum Capacity of your Listing?</h2>
                <input type="text"/>
            </div>
            <div>
                <h2>What will you charge per night?</h2>
                <textarea type="text"></textarea>
            </div>
            <div>
                <button>Ok</button>
            </div>
        </div>
    )
} 

export default ListingPriceForm;