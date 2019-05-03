import React from 'react';
import { connect } from 'react-redux';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';
import NavRight from './nav_right';
import NavLeft from './nav_left';

class ListingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", description: "" }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.updateCreation("title", this.state.title),
        this.props.updateCreation("description", this.state.description),
        location.href = "/#/listing_create/location"
    }

    update(type) {
        return (e) => this.setState({
            [type]: e.currentTarget.value
        })
    }

    render() {
        let ok;
        if (this.state.title === "" || this.state.description === "") {
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
                            {/* <button className="ok" onClick={this.onClick}>Ok</button> */}
                            {ok}
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
            </>
        )
    }   
}
debugger
const mdp = dispatch => ({
    updateCreation: (key, value) => dispatch(updateCreation(key, value))
});

export default connect(null, mdp)(ListingForm);