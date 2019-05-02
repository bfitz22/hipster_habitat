import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, DELETE_SESSION } from '../actions/session_actions';
import { RECEIVE_LISTING } from '../actions/listing_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            const newState = merge({}, state, {[action.user.id]: action.user});
            return newState;
        case DELETE_SESSION:
            return {};
        case RECEIVE_LISTING:
            return merge({}, state, {[action.listing.host_id]: action.host});
        default: 
            return state; 
    }
};

export default usersReducer;