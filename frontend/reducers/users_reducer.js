import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, DELETE_SESSION } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            const newState = merge({}, state, {[action.user.id]: action.user});
            return newState;
        case DELETE_SESSION:
            return {};
        default: 
            return state; 
    }
};

export default usersReducer;