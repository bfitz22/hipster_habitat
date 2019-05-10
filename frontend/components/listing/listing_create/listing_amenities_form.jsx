import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';
import NavRight from './nav_right';
import NavLeft from './nav_left';
import { connect } from 'react-redux';

class ListingAmenitiesForm extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = { "arr": [
                {type: "is_pets", active: this.props.is_pets, title: "Pets Allowed"},
                {type: "is_campfires", active: this.props.is_campfires, title: "Campfires Allowed"},
                {type: "is_water", active: this.props.is_water, title: "Water Available"},
                {type: "is_toilets", active: this.props.is_toilets, title: "Toilets Available"},
                {type: "is_showers", active: this.props.is_showers, title: "Showers Available"},
                {type: "is_wifi", active: this.props.is_wifi, title: "WiFi Available"}
            ]
        }
    }

    onClick() {
        this.state.arr.map(el => {
            if (el.active) {
                this.props.amenity_arr.push([el.type, true])
            } else {
                this.props.amenity_arr.push([el.type, false])
            }
        }),
        this.props.updateCreation("amenity", this.props.amenity_arr);
        location.href = "/#/listing_create/activities"
    }

    // update(type, value) {
    //     return updateCreation(type, value)
    // }

    toggle(index) {
        let arr = this.state.arr;
        arr[index].active = !arr[index].active;
        this.setState({ arr: arr });
    }

    // https://stackoverflow.com/questions/45420503/how-to-handle-state-of-multiple-buttons-with-react

    render() {
        let ok;
        if (this.state.arr.every(el => !el.active)) {
            ok = <button className="not-ok">Ok</button>
        } else {
            ok = <button className="ok" onClick={this.onClick}>Ok</button>
        }

        const options = this.state.arr.map((el, i) => 
            <div key={i} className={el.active ? "green" : "grey"} type={el.type} active={el.active ? "true" : "false"} 
            onClick={() => this.toggle(i)}>{el.title}</div>
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
                            <h2>Select the amenities available near your listing</h2> 
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
                            <p className="directions-title">What if I have additional amenities?</p>
                            <br/>
                            <p className="directions-body">Just select from this list for now, there will be an
                            opportunity to include any others later on in the process. </p>
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
        is_pets: creations.is_pets,
        is_campfires: creations.is_campfires,
        is_water: creations.is_water,
        is_toilets: creations.is_toilets,
        is_showers: creations.is_showers,
        is_wifi: creations.is_wifi,
        amenity_arr: creations.amenity
    }
}

const mdp = dispatch => ({
    updateCreation: (key, value) => dispatch(updateCreation(key, value))
});

export default connect(msp, mdp)(ListingAmenitiesForm);