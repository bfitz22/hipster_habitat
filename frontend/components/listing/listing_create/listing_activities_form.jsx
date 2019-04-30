import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';
import ListingNav from './listing_form_nav';

class ListingActivitiesForm extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = { "arr": [
                {type: "is_hiking", active: false, title: "Hiking"},
                {type: "is_biking", active: false, title: "Biking"},
                {type: "is_swimming", active: false, title: "Swimming"},
                {type: "is_fishing", active: false, title: "Fishing"},
                {type: "is_horseback", active: false, title: "Horseback Riding"},
                {type: "is_climbing", active: false, title: "Climbing"}
            ]
        }
    }

    onClick() {
        this.state.arr.map(el => {
            updateCreation(el.type, el.active);
        }),
        location.href = "/#/listing_create/photos"
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
        const options = this.state.arr.map((el, i) => 
            <div key={i} className={el.active ? "green" : "grey"} type={el.type} active={el.active ? "true" : "false"} 
            onClick={() => this.toggle(i)}>{el.title}</div>
        )

        return (
            <>
            <ListingNav />
            <div className="form-body">
                    <div className="nav-arrow-container">
                        <div className="nav-arrow-grey"><i className="fas fa-chevron-left" aria-hidden="true"></i></div>
                        <div className="nav-arrow"><i className="fas fa-chevron-right"></i></div>
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
                            <button className="ok" onClick={this.onClick}>Ok</button>
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

export default ListingActivitiesForm;