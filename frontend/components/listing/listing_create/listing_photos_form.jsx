import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';

class ListingPhotosForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: null,
            url: null
        };
        this.onClick = this.onClick.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFile(e) {
        debugger
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
        this.setState({ imageUrl: reader.result, imageFile: file});
        if (file) {
        reader.readAsDataURL(file);
        } else {
        this.setState({ imageUrl: "", imageFile: null });
        }    
    }

    onClick() {
        updateCreation("photos",)
        location.href = "/"
    }

    handleFileUpload(e) {
        for (let i = 0; i < e.target.files.length; i++) {
            this.setState({file: file})
        }

        this.setState({file: e.target.files});
        const fd = new FormData();
        fd.append('image', this.state.file, this.state.file.name)
        axios.post('', fd).then(res => {
            console.log(res);
        })
    }

    render() {
        debugger
        return (
            <>
            <ListingNav />
            <div className="form-body">
                <div className="form-vessel" action="upload.php" encType="multipart/form-data">
                    <div className="form-container">
                        <div className="listing-form-title">
                            <h2>Upload photos of your Listing</h2>
                        </div>

                            <div className="form-input">
                                <form>
                                    <input className="upload-field" id="file" type="file" onChange={this.handleFile}/>
                                    <label htmlFor="file" className="image-upload" ><i className="fas fa-camera"></i>Click to add photos</label>
                                    {/* {previewImg} */}
                                </form>
                            </div>

                            {/* <button className="upload-button" onClick={this.handleFileUpload}>Upload</button> */}
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
                </div>
                
            </div>
            </>
        )
    } 
}

const msp = ({ entities: { creations } }) => {
    return {
        photos: creations.photos 
    }
}

const mdp = dispatch => ({
    updateCreation: (key, value) => dispatch(updateCreation(key, value))
})

export default connect(msp, mdp)(ListingPhotosForm);