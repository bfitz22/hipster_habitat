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
                <div className="form-container">
                    <div className="form-title">
                        <h2>What are the coordinates of your Listing?</h2>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="latitude" onChange={this.update("lat")}/>
                        <input type="text" placeholder="longitude" onChange={this.update("lng")} />
                    </div>
                    <div>
                        <button onClick={this.onClick}>Ok</button>
                    </div>
                </div>
            </div>
        )
    } 
}

export default ListingLocationForm;