import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';
import NavRight from './nav_right';
import NavLeft from './nav_left';
import { connect } from 'react-redux';
import classNames from 'classnames';

class ListingSiteForm extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = { "arr": [
            {type: "tent", name: "Campsites", active: this.props.site === "tent", image: "fas fa-campground"},
            {type: "cabin", name: "Lodging", active: this.props.site === "cabin", image: "fas fa-home"},
            {type: "rv", name: "RVs", active: this.props.site === "rv", image: "fas fa-shuttle-van"}
        ]}
    }

    onClick() {
        this.state.arr.forEach(el => {
            if (el.active) {
                this.props.updateCreation("site", el.type)
            }
        }),
        location.href = "/#/listing_create/amenities"
    }

    toggle(index) {
        let arr = this.state.arr;
        arr[index].active = !arr[index].active;
        arr.forEach((el, i) => {
            if (i !== index) {
                el.active = false;
            }
        })
        this.setState({ arr: arr });
    }

    render() {
        let ok;
        if (this.state.arr.every(el => !el.active)) {
            ok = <button className="not-ok">Ok</button>
        } else {
            ok = <button className="ok" onClick={this.onClick}>Ok</button>
        }

        const options = this.state.arr.map((el, i) => 
            <div key={i} className={el.active ? "green-site" : "grey-site"} type={el.type} active={el.active ? "true" : "false"} 
            onClick={() => this.toggle(i)}>{el.name}<i className={classNames(el.image, "site-image")}></i></div>
        )

        let next = null; 
        if (this.props.site) { next = "/#/listing_create/amenities" }

        return (
            <>
            <ListingNav />
            <div className="form-body">
                    <div className="nav-arrow-container">
                        <NavLeft prev={"/#/listing_create/price"}/>
                        <NavRight next={next}/>
                    </div>
                <div className="form-vessel">
                    <div className="form-container">
                        <div className="listing-site-title">
                            <h2>Select what type of camping your site provides</h2> 
                        </div>
                        <div className="form-buttons">
                            {options}
                        </div>
                        <div>
                            {ok}
                        </div>
                    </div>
                

                    <div className="directions-container">
                        <div className="directions">
                            <p className="directions-title">Campsite Area</p>
                            <br/>
                            <p className="directions-body">This is the space you will provide. The Hipster will either bring 
                            their own tent or vehicle to sleep in or you will provide a structure, such as a cabin, for them to use.</p>
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
        site: creations.site
    }
}

const mdp = dispatch => ({
    updateCreation: (key, value) => dispatch(updateCreation(key, value))
});

export default connect(msp, mdp)(ListingSiteForm);