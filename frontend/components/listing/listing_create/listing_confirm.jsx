import React from 'react';
import { createListing } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';
import classNames from 'classnames';
import { connect } from 'react-redux';

class ListingConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.createListing(this.props.creations)
        location.href = "/#/listing_create/photos"
    }

    render() {
        let image;
        if (this.props.creations.site === "tent") {
            image = "fas fa-campground"
        } else if (this.props.creations.site === "cabin") {
            image = "fas fa-home"
        } else if (this.props.creations.site === "rv") {
            image = "fas fa-shuttle-van"
        }
        
        let siteName = this.props.creations.site.toUpperCase();

        let site = <div className="amenity-div">
            {siteName}
            <div><i className={classNames(image, "site-confirm-image")}></i>
            <i className="fas fa-check"></i></div>
        </div>

        let true_amenities = this.props.creations.amenity.filter(amenity => 
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
                </div>
                <div className="form-vessel">
                    <div className="confirm-form-container">
                        <div className="listing-form-title">
                            <h2>Please review your listing's details</h2>
                        </div>
                        <br/>
                        <br/>
                        <div className="confirm-div">
                            <div>
                            <div className="listing-form-title">
                                <h2>Title and Description</h2>
                            </div>
                            <div className="form-input">
                                <p>Title: {this.props.creations.title}</p>
                                <p>Description: {this.props.creations.description}</p>
                            </div>
                            </div>
                            <a className="edit-link" href="/#/listing_create/">Edit</a>
                        </div>
                        <div className="confirm-div">
                            <div>
                            <div className="listing-form-title">
                                <h2>Location</h2>
                            </div>
                            <div className="form-input">
                                <p>Address: {this.props.creations.street}</p>
                                <p>City/State: {this.props.creations.location}</p>
                                <p>Zipcode: {this.props.creations.zip}</p>
                            </div>
                            </div>
                            <a className="edit-link" href="/#/listing_create/location">Edit</a>
                        </div>
                        <div className="confirm-div">
                            <div>
                            <div className="listing-form-title">
                                <h2>Max Capacity and Price per Night</h2>
                            </div>
                            <div className="form-input">
                                <p>Max Capacity: {this.props.creations.max_capacity}</p>
                                <p>Price per Night: ${this.props.creations.price}</p>
                            </div>
                            </div>
                            <a className="edit-link" href="/#/listing_create/price">Edit</a>
                        </div>
                        <div className="confirm-div">
                            <div>
                            <div className="listing-form-title">
                                <h2>Type of Site</h2>
                            </div>
                            <div className="site-confirm">
                            <div className="form-buttons">{site}</div>
                            </div>
                            </div>
                            <a className="edit-link" href="/#/listing_create/site_type">Edit</a>
                        </div>
                        <div className="confirm-div">
                            <div>
                            <div className="listing-form-title">
                                <h2>Amenities and Activities Available</h2>
                            </div>
                            <div className="form-input">
                                <div className="form-buttons">{amenities}</div>
                            </div>
                            </div>
                            <a className="edit-link" href="/#/listing_create/amenities">Edit</a>
                        </div>
                        <div className="confirm-div">
                            <div>
                            <div className="listing-form-title">
                                <h2>Available Times for Checking In and Out</h2>
                            </div>
                            <div className="form-input">
                                <p>Check in after: {this.props.creations.check_in}</p>
                                <p>Check out before: {this.props.creations.check_out}</p>
                            </div>
                            </div>
                            <a className="edit-link" href="/#/listing_create/check_in">Edit</a>
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