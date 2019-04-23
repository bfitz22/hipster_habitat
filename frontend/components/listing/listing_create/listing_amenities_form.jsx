import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';

class ListingAmenitiesForm extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = { "arr": [
                {type: "is_pets", active: false },
                {type: "is_campfires", active: false },
                {type: "is_water", active: false },
                {type: "is_toilets", active: false },
                {type: "is_showers", active: false },
                {type: "is_wifi", active: false }
            ]
        }
    }

    onClick() {
        this.state.arr.map(el => {
            updateCreation(el.type, el.active);
        }),
        location.href = "/#/listing_create/activities"
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
            <div key={i} className={el.active ? "green" : "grey"} type={el.type} active={el.active ? "true" : "false"} onClick={() => this.toggle(i)}></div>
        )

        return (
            <div className="form-body">
                <div className="nav-arrow-container">
                    <div className="nav-arrow-grey"><i className="fas fa-chevron-left" aria-hidden="true"></i></div>
                    <div className="nav-arrow"><i className="fas fa-chevron-right"></i></div>
                </div>
                <div className="listing-form-title">
                    <h2>Select the amenities available near your listing</h2> 
                </div>
                <div className="form-buttons">
                    {options}
                </div>
                <div>
                    <button className="ok" onClick={this.onClick}>Ok</button>
                </div>
            </div>
        )
    }
} 

export default ListingAmenitiesForm;