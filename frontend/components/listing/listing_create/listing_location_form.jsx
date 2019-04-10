import React from 'react';

class ListingLocationForm extends React.Component {
    update(type) {
        return (e) => {
            updateCreation(type, e.target.value)
        }
    }

    render() {
        return (
            <div className="form-body">
                <div className="form-title">
                    <h2>What are the coordinates of your Listing?</h2>
                    <input type="text" placeholder="latitude" onChange={this.update("lat")}/>
                    <input type="text" placeholder="longitude" onChange={this.update("lng")} />
                </div>
                <div>
                    <button>Ok</button>
                </div>
            </div>
        )
    } 
}

export default ListingLocationForm;