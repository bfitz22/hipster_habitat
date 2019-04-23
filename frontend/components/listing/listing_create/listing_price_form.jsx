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
                <div className="nav-arrow-container">
                    <div className="nav-arrow-grey"><i className="fas fa-chevron-left" aria-hidden="true"></i></div>
                    <div className="nav-arrow"><i className="fas fa-chevron-right"></i></div>
                </div>
                <div className="form-vessel">
                    <div className="form-container">
                        <div className="listing-form-title">
                            <h2>What is the Maximum Capacity of your Listing?</h2>
                        </div>
                        <div className="form-input">
                            <input type="number" step="1" onChange={this.update("max_capacity")}/>
                        </div>
                        <div className="listing-form-title">
                            <h2>What will you charge per night?</h2>
                        </div>
                        <div className="form-price">
                            $<input type="number" step="5" onChange={this.update("price")}/>/night
                        </div>
                        <div>
                            <button className="ok" onClick={this.onClick}>Ok</button>
                        </div>
                    </div>
                    <div className="directions-container">
                        <div className="directions">
                            <p className="directions-title">Meet Yogi <br/> Host team</p>
                            <br/>
                            <p className="directions-body">“My team and I are so excited you've chosen us to be your partner in sharing your land with our community of Hipsters 
                            across the country. We want to help you achieve your hosting goals. <a className="help" href="">Email us at any time</a> if you have any questions.”</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default ListingPriceForm;