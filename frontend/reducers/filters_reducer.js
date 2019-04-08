import { CHANGE_FILTER } from '../actions/filter_actions';
import { merge } from 'lodash';

const filtersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case CHANGE_FILTER:
            const newFilter = { [action.filter]: action.value }
            return merge({}, state, newFilter);
        default:
            return state;
    }
}

export default filtersReducer; 