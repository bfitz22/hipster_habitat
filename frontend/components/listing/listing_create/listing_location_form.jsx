import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';
import NavRight from './nav_right';
import NavLeft from './nav_left';

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
        let ok;
        if (this.state.lat === "" || this.state.lng === "") {
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
                            <h2>What are the coordinates of your Listing?</h2>
                        </div>
                        <div className="form-input">
                            <input type="number" placeholder="latitude" onChange={this.update("lat")}/>
                            <input type="number" placeholder="longitude" onChange={this.update("lng")} />
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

export default ListingLocationForm;