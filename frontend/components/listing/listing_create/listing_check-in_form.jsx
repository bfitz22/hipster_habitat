import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';
import NavRight from './nav_right';
import NavLeft from './nav_left';
import { connect } from 'react-redux';

class ListingCheckinForm extends React.Component {
    constructor(props) {
        super(props);
        const check_in = this.props.check_in || "";
        const check_out = this.props.check_out || "";
        this.state = { check_in, check_out}
        this.onClick = this.onClick.bind(this);
        this.options = ["----", "12:00am", "1:00am", "2:00am", "3:00am", "4:00am",
        "5:00am", "6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am",
        "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", 
        "7:00pm", "8:00pm", "9:00pm", "10:00pm", "11:00pm"]
    }

    onClick() {
        this.props.updateCreation("check_in", this.state.check_out),
        this.props.updateCreation("check_out", this.state.check_out),
        location.href = "/#/listing_create/confirm"
    }
    
    update(type) {
        return (e) => this.setState({
            [type]: e.currentTarget.value
        })
    }

    render() {
        let ok;
        if (this.state.check_in === "----" || this.state.check_in === "" ||
            this.state.check_out === "----" || this.state.check_out === "") {
            ok = <button className="not-ok">Ok</button>
        } else {
            ok = <button className="ok" onClick={this.onClick}>Ok</button>
        }

        const times = this.options.map((el, i) => 
            <option key={i} value={el}>{el}</option>
        )
        
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
                            <h2>Select how you'd like to check in Hipsters</h2>
                        </div>
                        <div className="form-input">
                            <p>Check in after...</p>
                            <select name="check-in" value={this.state.check_in} onChange={this.update("check_in")}>{times}</select>
                            <p>Check out before...</p>
                            <select name="check-out" value={this.state.check_out} onChange={this.update("check_out")}>{times}</select> 
                        </div>
                        <div>
                            {ok}
                        </div>
                    </div>
                    <div className="directions-container">
                        <div className="directions">
                            <p className="directions-title">Helpful Tip</p>
                            <br/>
                            <p className="directions-body">How much time do you need to plan for Hipsters?
                            By keeping your time availability up to date, you'll be able to keep a shorter 
                            check-in window.</p>
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
        check_in: creations.check_in,
        check_out: creations.check_out
    }
}

const mdp = dispatch => ({
    updateCreation: (key, value) => dispatch(updateCreation(key, value))
});

export default connect(msp, mdp)(ListingCheckinForm);