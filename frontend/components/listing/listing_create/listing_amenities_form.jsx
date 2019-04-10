import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';

class ListingAmenitiesForm extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
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

    update(type, value) {
        return updateCreation(type, value)
    }

    toggle(index, type) {
        let arr = this.state.arr;
        arr[index].active = !arr[index].active;
        this.setState({ arr: arr });
        this.update(type, arr[index].active)
    }

    render() {
        const options = this.state.arr.map((el, i) => 
            <div key={i} className={el.active ? "green" : "grey"} type={el.type} active={el.active ? "true" : "false"} onClick={() => this.toggle(i, this.type)}></div>
        )

        return (
            <div className="form-body">
                <div className="form-buttons">
                    {options}
                </div>
                <div>
                    <button>Ok</button>
                </div>
            </div>
        )
    }
} 

export default ListingAmenitiesForm;