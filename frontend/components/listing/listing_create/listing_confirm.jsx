import React from 'react';
import { createListing } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';
import NavRight from './nav_right';
import NavLeft from './nav_left';
import { connect } from 'react-redux';

class ListingConfirm extends React.Component {
    constructor(props) {
        super(props);
        const creations = this.props.creations;
        this.state = { creations }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.createListing(this.state.creations)
        // location.href = "/#/listing_create/photos"
    }

    render() {
        let true_amenities = this.state.creations.amenity.filter(amenity => 
            amenity[1] === true 
        )

        let amenities = true_amenities.map((amenity, i) => 
            <div key={i} className="amenity-div">{amenity[0].split("").slice(3).join("")}
            <i className="fas fa-check"></i></div>
        )
        return (
            <>
            <ListingNav />
            <div className="confirm-form-body">
                <div className="nav-arrow-container">
                    <NavLeft/>
                    <NavRight/>
                </div>
                <div className="form-vessel">
                    <div className="confirm-form-container">
                        <h1>Please review your listing's details</h1>
                        <div className="listing-form-title">
                            <h2>Title and Description</h2>
                        </div>
                        <div className="form-input">
                            <p>Title: {this.state.creations.title}</p>
                            <p>Description: {this.state.creations.description}</p>
                        </div>
                        <div className="listing-form-title">
                            <h2>Location</h2>
                        </div>
                        <div className="form-input">
                            <p>Latitude: {this.state.creations.lat}</p>
                            <p>Longitude: {this.state.creations.lng}</p>
                            <p>Location: {this.state.creations.location}</p>
                        </div>
                        <div className="listing-form-title">
                            <h2>Max Capacity and Price per Night</h2>
                        </div>
                        <div className="form-input">
                            <p>Max Capacity: {this.state.creations.max_capacity}</p>
                            <p>Price per Night: {this.state.creations.price}</p>
                        </div>
                        <div className="listing-form-title">
                            <h2>Type of Site</h2>
                        </div>
                        <div className="form-input">
                            <p>{this.state.creations.site}</p>
                        </div>
                        <div className="listing-form-title">
                            <h2>Amenities and Activities Available</h2>
                        </div>
                        <div className="form-input">
                            <div className="form-buttons">{amenities}</div>
                        </div>
                        <div className="listing-form-title">
                            <h2>Available Times for Checking In and Out</h2>
                        </div>
                        <div className="form-input">
                            <p>Check in after: {this.state.creations.check_in}</p>
                            <p>Check out before: {this.state.creations.check_out}</p>
                        </div>
                        <div>
                            <button className="ok-create" onClick={this.onClick}>Create Your Listing!</button>
                        </div>
                    </div>
                    <div className="directions-container">
                        <div className="directions">
                            <p className="directions-title">What if I need to change something?</p>
                            <br/>
                            <p className="directions-body">Simply click the edit button next to the info that
                            needs to be changed and you will be able to modify those details. </p>
                        </div>
                    </div>
                </div>
                
            </div>
            </>
        )
    } 
}

const msp = ({ entities: { creations } }) => {
    return {
        creations
    }
}

const mdp = dispatch => ({
    createListing: (listing) => dispatch(createListing(listing))
});

export default connect(msp, mdp)(ListingConfirm);