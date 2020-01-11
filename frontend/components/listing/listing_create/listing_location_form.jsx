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
        const street = this.props.street || "";
        const city = this.props.location.split(", ")[0] || "";
        const USstate = this.props.location.split(", ")[1] || "";
        const zip = this.props.zip || "";
        this.state = { 
            street,
            city,
            USstate,
            zip,
            errors: [] };
        this.onClick = this.onClick.bind(this);
        this.geocode = Geocode;
        this.geocode.setApiKey("AIzaSyC0pn1ErvinGCDqDgU6Dvj6XeiOqNEF9L0");
        this.onEnter = this.onEnter.bind(this);
        this.proceed = this.state.street !== "" && this.state.city !== "" && this.state.USstate !== "----" && this.state.zip !== "" ? true : false;
    }

    onClick() {
        let address = this.state.street + " " + this.state.city + " " + this.state.USstate + " " + this.state.zip;
        this.geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.props.updateCreation("lat", lat)
                this.props.updateCreation("lng", lng)
                this.props.updateCreation("location", this.state.city + ", " + this.state.USstate)
                this.props.updateCreation("street", this.state.street)
                this.props.updateCreation("zip", this.state.zip)
            },
            error => {
                console.log(error);
            }
        )
        location.href = "/#/listing_create/price"
    }

    onEnter(e) {
        if (e.keyCode === 13 && e.shiftKey === false && this.state.street !== "" && this.state.city !== "" && this.state.USstate !== "----" && this.state.zip !== "") {
            e.preventDefault();
            this.onClick();
        }
    }
    
    update(type) {
        return (e) => this.setState({
            [type]: e.currentTarget.value
        })
    }

    render() {
        const states = ["----", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", 
        "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", 
        "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", 
        "VA", "WA", "WV", "WI", "WY"]
        
        let currentState = this.state.USstate.toString();
        const options = states.map((el, i) => {
            if (currentState === el) {
                return <option selected key={i} value={el} defaultValue={el}>{el}</option>
            } else {
                return <option key={i} value={el}>{el}</option>
            }
        })

        let ok;
        if (this.state.street === "" || this.state.city === "" || this.state.USstate === "----" || this.state.zip === "") {
            ok = <button className="not-ok">Ok</button>
        } else {
            ok = <button className="ok" onClick={this.onClick}>Ok</button>
        }

        let next = null;
        if (this.props.lat) { next = "/#/listing_create/price"}

        return (
            <>
            <ListingNav />
            <div className="form-body">
                <div className="nav-arrow-container">
                    <NavLeft prev={"/#/listing_create/"}/>
                    <NavRight next={next}/>
                </div>
                <div className="form-vessel">
                    <div className="form-container">
                        <div className="listing-form-title">
                            <h2>What is the address of your Listing?</h2>
                        </div>
                        <div className="form-input" onKeyDown={this.onEnter}>
                            <p>Street Address</p>
                            <input type="text" value={this.state.street} placeholder={this.state.street} onChange={this.update("street")}/>
                            <p>City</p>
                            <input type="text" value={this.state.city} placeholder={this.state.city} onChange={this.update("city")} />
                            <p>State</p>
                            <select type="select" onChange={this.update("USstate")}>{options}</select> 
                            <p>Zip Code</p>
                            <input type="text" value={this.state.zip} placeholder={this.state.zip} onChange={this.update("zip")} />
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
        location: creations.location, 
        street: creations.street,
        zip: creations.zip
    }
}

const mdp = dispatch => ({
    updateCreation: (key, value) => dispatch(updateCreation(key, value))
});

export default connect(msp, mdp)(ListingLocationForm);