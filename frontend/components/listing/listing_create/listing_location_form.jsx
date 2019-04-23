import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';

class ListingLocationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: "", lng: "" }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        updateCreation("lat", this.state.lat),
        updateCreation("lng", this.state.lng),
        location.href = "/#/listing_create/price"
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
                            <h2>What are the coordinates of your Listing?</h2>
                        </div>
                        <div className="form-input">
                            <input type="text" placeholder="latitude" onChange={this.update("lat")}/>
                            <input type="text" placeholder="longitude" onChange={this.update("lng")} />
                        </div>
                        <div>
                            <button className="ok" onClick={this.onClick}>Ok</button>
                        </div>
                    </div>
                    <div className="directions-container">
                        <div className="directions">
                            <p className="directions-title">Why do you need this?</p>
                            <br/>
                            <p className="directions-body">To ensure Hipsters can find you, you’ll need to tell us where your 
                            property can be found on a map. Remote and rural properties are welcome as they make for some of the 
                            best Habitats. </p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    } 
}

export default ListingLocationForm;