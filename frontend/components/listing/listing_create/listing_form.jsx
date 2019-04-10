import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';

class ListingForm extends React.Component {
    // constructor() {
    //     this.onClick = this.onClick.bind(this);
    // }

    // onClick = () => {
        
    // }

    update(type) {
        return (e) => {
            updateCreation(type, e.target.value)
        }
    }

    render() {
        return (
            <div className="form-body">
                <div className="form-title">
                    <h2>What is the Title of your Listing?</h2>
                    <input id="title" type="text" onChange={this.update("title")}/>
                </div>
                <div>
                    <h2>Describe your Listing</h2>
                    <textarea id="description" type="text" onChange={this.update("description")}></textarea>
                </div>
                <div>
                    <button>Ok</button>
                </div>
            </div>
        )
    }   
}

export default ListingForm;