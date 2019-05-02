import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';
import NavRight from './nav_right';
import NavLeft from './nav_left';

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
                    <NavLeft/>
                    <NavRight/>
                </div>
                <form className="form-vessel" action="upload.php" encType="multipart/form-data">
                    <div className="form-container">
                        <div className="listing-form-title">
                            <h2>Upload photos of your Listing</h2>
                        </div>
                        <div className="form-input">
                            <input className="upload-button" id="file" type="file" name="fileToUpload" />
                            <label className="image-upload" for="file"><i class="fas fa-camera"></i>Click to add photos</label>
                        </div>
                        <div>
                            <button className="ok-create" onClick={this.onClick}>Create Your Listing!</button>
                        </div>
                    </div>
                    <div className="directions-container">
                        <div className="directions">
                            <p className="directions-title">How photos on HipsterHabitat work</p>
                            <br/>
                            <p className="directions-body">Make sure you put the best photo first.
                            <br/>
                            <br/>
                            This photo appears in HipsterHabitat searches so it's important you showcase your
                            listing with it </p>
                        </div>
                    </div>
                </form>
                
            </div>
            </>
        )
    } 
}

export default ListingPhotosForm;