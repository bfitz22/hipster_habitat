import React from 'react';
import Geocode from 'react-geocode';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';
import NavRight from './nav_right';
import NavLeft from './nav_left';
import { connect } from 'react-redux';

class ListingLocationForm extends React.Component {
    constructor(props) {
        super(props);
        // const lat = this.props.lat || "";
        // const lng = this.props.lng || "";
        const city = this.props.location || "";
        this.state = { 
            city,
            errors: [] };
        this.onClick = this.onClick.bind(this);
        this.geocode = Geocode;
        this.geocode.setApiKey("AIzaSyC0pn1ErvinGCDqDgU6Dvj6XeiOqNEF9L0");
    }

    onClick() {
        let address = this.state.street + " " + this.state.city + " " + this.state.USstate + " " + this.state.zip;
        this.geocode.fromAddress(address).then(
            response => {
                debugger
                const { lat, lng } = response.results[0].geometry.location;
                this.props.updateCreation("lat", lat)
                this.props.updateCreation("lng", lng)
                this.props.updateCreation("location", this.state.city + ", " + this.state.USstate)
            },
            error => {
                console.log(error);
            }
        )
        location.href = "/#/listing_create/price"
    }
    
    update(type) {
        return (e) => this.setState({
            [type]: e.currentTarget.value
        })
    }

    render() {
        let ok;
        if (this.state.lat === "" || this.state.lng === "" || this.state.location === "") {
            ok = <button className="not-ok">Ok</button>
        } else {
            ok = <button className="ok" onClick={this.onClick}>Ok</button>
        }

        return (
            <>
            <ListingNav />
            <div className="form-body">
                <div className="nav-arrow-container">
                    <NavLeft/>
                    <NavRight/>
                </div>
                <div className="form-vessel">
                    <div className="form-container">
                        <div className="listing-form-title">
                            <h2>What is the address of your Listing?</h2>
                        </div>
                        <div className="form-input">
                            <p>Street Address</p>
                            <input type="text" value={this.state.street} onChange={this.update("street")}/>
                            <p>City</p>
                            <input type="text" value={this.state.city} onChange={this.update("city")} />
                            <p>State</p>
                            <input type="text" value={this.state.USstate} onChange={this.update("USstate")} />
                            <p>Zip Code</p>
                            <input type="text" value={this.state.zip} onChange={this.update("zip")} />
                        </div>
                        <div>
                            {ok}
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
            </>
        )
    } 
}

const msp = ({ entities: { creations } }) => {
    return {
        lat: creations.lat,
        lng: creations.lng,
        location: creations.location
    }
}

const mdp = dispatch => ({
    updateCreation: (key, value) => dispatch(updateCreation(key, value))
});

export default connect(msp, mdp)(ListingLocationForm);