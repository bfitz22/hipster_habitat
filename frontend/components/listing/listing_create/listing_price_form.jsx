import React from 'react';

class ListingPriceForm extends React.Component {
    update(type) {
        return (e) => {
            updateCreation(type, e.target.value)
        }
    }

    render() {
            return (
            <div className="form-body">
                <div className="form-title">
                    <h2>What is the Maximum Capacity of your Listing?</h2>
                    <input type="text" onChange={this.update("maximum_capacity")}/>
                </div>
                <div>
                    <h2>What will you charge per night?</h2>
                    $<input type="text" onChange={this.update("price")}/>/night
                </div>
                <div>
                    <button>Create Your New Listing!</button>
                </div>
            </div>
        )
    }
} 

export default ListingPriceForm;