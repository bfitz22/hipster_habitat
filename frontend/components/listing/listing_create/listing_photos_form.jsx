import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';

class ListingPhotosForm extends React.Component {
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
            <>
            <ListingNav />
            <div className="form-body">
                <div className="nav-arrow-container">
                    <div className="nav-arrow-grey"><i className="fas fa-chevron-left" aria-hidden="true"></i></div>
                    <div className="nav-arrow"><i className="fas fa-chevron-right"></i></div>
                </div>
                <form className="form-vessel" action="upload.php" enctype="multipart/form-data">
                    <div className="form-container">
                        <div className="listing-form-title">
                            <h2>Upload photos of your Listing</h2>
                        </div>
                        <div className="form-input">
                            <input type="file" name="fileToUpload" onChange={this.update("lat")}/>
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
                </form>
                
            </div>
            </>
        )
    } 
}

export default ListingPhotosForm;