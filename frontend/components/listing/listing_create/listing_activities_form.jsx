import React from 'react';
import { updateCreation } from '../../../actions/listing_actions';

class ListingActivitiesForm extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { "arr": [
                {type: "is_hiking", active: false },
                {type: "is_biking", active: false },
                {type: "is_swimming", active: false },
                {type: "is_fishing", active: false },
                {type: "is_horseback", active: false },
                {type: "is_climbing", active: false }
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

    // https://stackoverflow.com/questions/45420503/how-to-handle-state-of-multiple-buttons-with-react

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

                    // <button className="grey" value="off" onClick={this.toggle("is_hiking")}>Hiking</button>
                    // <button className="grey" value="off" onClick={this.toggle("is_biking")}>Biking</button>
                    // <button className="grey" value="off" onClick={this.toggle("is_swimming")}>Swimming</button>
                    // <button className="grey" value="off" onClick={this.toggle("is_fishing")}>Fishing</button>
                    // <button className="grey" value="off" onClick={this.toggle("is_horseback")}>Horseback-Riding</button>
                    // <button className="grey" value="off" onClick={this.toggle("is_climbing")}>Climbing</button>

export default ListingActivitiesForm;