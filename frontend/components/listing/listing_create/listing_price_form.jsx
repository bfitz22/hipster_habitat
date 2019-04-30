import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';

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
            <>
            <ListingNav />
            <div className="form-body">
                <div className="nav-arrow-container">
                    <div className="nav-arrow-grey"><i className="fas fa-chevron-left" aria-hidden="true"></i></div>
                    <div className="nav-arrow"><i className="fas fa-chevron-right"></i></div>
                </div>
                <div className="form-vessel">
                    <div className="form-container">
                        <div className="listing-form-title">
                            <h2>How many people can your site accommodate?</h2>
                        </div>
                        <div className="form-input">
                            <input type="number" step="1" onChange={this.update("max_capacity")}/>
                        </div>
                        <div className="listing-form-title">
                            <h2>What do you want your price per night to be?</h2>
                        </div>
                        <div className="form-price">
                            <div>$</div><input type="number" step="5" onChange={this.update("price")}/><div>/night</div>
                        </div>
                        <div>
                            <button className="ok" onClick={this.onClick}>Ok</button>
                        </div>
                    </div>
                    <div className="directions-container">
                        <div className="directions">
                            <p className="directions-title">What if I don't know what to charge?</p>
                            <br/>
                            <p className="directions-body">We suggest you start low while you perfect your experience. 
                            You can update your pricing at any time.</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
} 

export default ListingPriceForm;