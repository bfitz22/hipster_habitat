import { UPDATE_CREATION_STATE } from '../actions/listing_actions';
import { merge } from 'lodash';

const creationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case UPDATE_CREATION_STATE:
            const newListing = { [action.key]: action.value }
            return merge({}, state, newListing);
        default: 
            return state;
    }
}

export default creationsReducer;