import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';
import NavRight from './nav_right';
import NavLeft from './nav_left';
import { connect } from 'react-redux';

class ListingPriceForm extends React.Component {
    constructor(props) {
        super(props);
        const max_capacity = this.props.max_capacity || "";
        const price = this.props.price || "";
        this.state = { max_capacity, price}
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.updateCreation("max_capacity", this.state.max_capacity)
        this.props.updateCreation("price", this.state.price)
        location.href = "/#/listing_create/site_type"
    }
    
    update(type) {
        return (e) => this.setState({
            [type]: e.currentTarget.value
        })
    }

    render() {
        let ok;
        if (this.state.max_capacity === "" || this.state.price === "") {
            ok = <button className="not-ok">Ok</button>
        } else {
            ok = <button className="ok" onClick={this.onClick}>Ok</button>
        }

        let next = null;
        if (this.props.price) { next = "/#/listing_create/site_type" }

        return (
            <>
            <ListingNav />
            <div className="form-body">
                <div className="nav-arrow-container">
                    <NavLeft prev={"/#/listing_create/location"}/>
                    <NavRight next={next}/>
                </div>
                <div className="form-vessel">
                    <div className="form-container">
                        <div className="listing-form-title">
                            <h2>How many people can your site accommodate?</h2>
                        </div>
                        <div className="form-capacity">
                            <input type="number" step="1" value={this.state.max_capacity} onChange={this.update("max_capacity")}/>
                        </div>
                        <div className="listing-form-title">
                            <h2>What do you want your price per night to be?</h2>
                        </div>
                        <div className="form-price">
                            <div>$</div><input type="number" step="5" value={this.state.price} onChange={this.update("price")}/><div>/night</div>
                        </div>
                        <div>
                            {ok}
                        </div>
                    </div>
                    <div className="directions-container">
                        <div className="directions">
                            <p className="directions-title">What if I don't know what to charge?</p>
                            <br/>
                            <p className="directions-body">We suggest you start low while you perfect your experience. 
                            You can update your pricing at any time.</p>
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
        max_capacity: creations.max_capacity,
        price: creations.price
    }
}

const mdp = dispatch => ({
    updateCreation: (key, value) => dispatch(updateCreation(key, value))
});

export default connect(msp, mdp)(ListingPriceForm);