import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';

class ListingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", description: "" }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        updateCreation("title", this.state.title),
        updateCreation("description", this.state.description),
        location.href = "/#/listing_create/location"
    }

    update(type) {
        return (e) => this.setState({
            [type]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className="form-body">
                <div className="form-blah">
                    <div className="form-title">
                        <h2>What is the Title of your Listing?</h2>
                    </div>
                    <div className="form-input">
                        <input id="title" type="text" onChange={this.update("title")}/>
                    </div>
                    <div className="form-title">
                        <h2>Describe your Listing</h2>
                    </div>
                    <div className="form-input">
                        <textarea id="description" type="text" onChange={this.update("description")}></textarea>
                    </div>
                    <div>
                        <button onClick={this.onClick}>Ok</button>
                    </div>
                </div>
                <div className="directions-container">
                    <div className="directions">

                    </div>
                </div>
            </div>
        )
    }   
}

export default ListingForm;