import { merge } from 'lodash';
import { POST_SESSION, DELETE_SESSION } from '../actions/session_actions';

const _nullSession = {
    id: null
};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch(action.type) {
        case POST_SESSION:
            return merge({}, { id: action.user.id });
        case DELETE_SESSION: 
            return _nullSession;
        default: 
            return state; 
    }
};

export default sessionReducer;