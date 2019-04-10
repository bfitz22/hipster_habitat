import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';

class ListingPriceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { max_capacity: "", price: "" }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        updateCreation("max_capacity", this.state.max_capacity),
        updateCreation("price", this.state.price),
        location.href = "/#/listing_create/amenities"
    }
    
    update(type) {
        return (e) => this.setState({
            [type]: e.currentTarget.value
        })
    }

    render() {
            return (
            <div className="form-body">
                <div className="form-container">
                    <div className="form-title">
                        <h2>What is the Maximum Capacity of your Listing?</h2>
                    </div>
                    <div className="form-input">
                        <input type="text" onChange={this.update("max_capacity")}/>
                    </div>
                    <div className="form-title">
                        <h2>What will you charge per night?</h2>
                    </div>
                    <div className="form-input">
                        $<input type="text" onChange={this.update("price")}/>/night
                    </div>
                    <div>
                        <button onClick={this.onClick}>Ok</button>
                    </div>
                </div>
            </div>
        )
    }
} 

export default ListingPriceForm;