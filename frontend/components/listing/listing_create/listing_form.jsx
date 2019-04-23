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
                <div className="nav-arrow-container">
                        <div className="nav-arrow-grey"><i className="fas fa-chevron-left" aria-hidden="true"></i></div>
                        <div className="nav-arrow"><i className="fas fa-chevron-right"></i></div>
                </div>
                <div className="form-vessel">
                    <div className="form-container">
                        <div className="listing-form-title">
                            <h2>Welcome! <br/> Give us a Title and Description of your Listing</h2>
                        </div >

                        <div className="form-input">
                            <div >
                                <input id="title" type="text" placeholder="Title" onChange={this.update("title")}/>
                            </div>
                            <div >
                                <textarea id="description" type="text" placeholder="Description" onChange={this.update("description")}></textarea>
                            </div>
                        </div>
                        <div>
                            <button className="ok" onClick={this.onClick}>Ok</button>
                        </div>
                    </div>

                    <div className="directions-container">
                        <div className="directions">
                            <p className="directions-title">Meet Yogi <br/> Host team</p>
                            <br/>
                            <p className="directions-body">“My team and I are so excited you've chosen us to be your partner in sharing your land with our community of Hipsters 
                            across the country. We want to help you achieve your hosting goals. <a className="help" href="">Email us at any time</a> if you have any questions.”</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}

export default ListingForm;