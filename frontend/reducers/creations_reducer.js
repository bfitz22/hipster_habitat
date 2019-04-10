import { UPDATE_CREATION } from '../actions/listing_actions';
import { merge } from 'lodash';

const creationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case UPDATE_CREATION:
            const newListing = { [action.key]: action.value }
            debugger
            return merge({}, state, newListing);
        default: 
            return state;
    }
}

export default creationsReducer;