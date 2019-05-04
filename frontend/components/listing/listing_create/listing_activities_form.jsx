import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';
import NavRight from './nav_right';
import NavLeft from './nav_left';
import { connect } from 'react-redux';

class ListingActivitiesForm extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = { "arr": [
                {type: "is_hiking", active: this.props.is_hiking, title: "Hiking"},
                {type: "is_biking", active: this.props.is_biking, title: "Biking"},
                {type: "is_swimming", active: this.props.is_swimming, title: "Swimming"},
                {type: "is_fishing", active: this.props.is_fishing, title: "Fishing"},
                {type: "is_horseback", active: this.props.is_horseback, title: "Horseback Riding"},
                {type: "is_climbing", active: this.props.is_climbing, title: "Climbing"}
            ]
        }
    }

    onClick() {
        this.state.arr.map(el => {
            this.props.updateCreation(el.type, el.active);
        }),
        location.href = "/#/listing_create/check_in"
    }

    // update(type, value) {
    //     return updateCreation(type, value)
    // }

    toggle(index) {
        let arr = this.state.arr;
        arr[index].active = !arr[index].active;
        this.setState({ arr: arr });
        // this.update(type, arr[index].active)
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
                            <h2>Select the activities available near your listing</h2> 
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
                            <p className="directions-title">Why is this important?</p>
                            <br/>
                            <p className="directions-body">Hipcampers love learning about the types of activities available on 
                            and near your land. The more information they have, the more comfortable they are making a booking.</p>
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
        is_hiking: creations.is_hiking,
        is_swimming: creations.is_swimming,
        is_horseback: creations.is_horseback,
        is_biking: creations.is_biking,
        is_fishing: creations.is_fishing,
        is_climbing: creations.is_climbing
    }
}

const mdp = dispatch => ({
    updateCreation: (key, value) => dispatch(updateCreation(key, value))
});

export default connect(msp, mdp)(ListingActivitiesForm);