import { merge } from 'lodash';
import { RECEIVE_LISTINGS, RECEIVE_LISTING, RECEIVE_APPOINTMENT, RECEIVE_MAP_LISTINGS } from '../actions/listing_actions';

const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_LISTING: 
            return merge({}, state, {[action.listingId]: action.listing} );
        case RECEIVE_APPOINTMENT:
            return merge({}, state, action.appointment);
        case RECEIVE_MAP_LISTINGS:
            return action.listings; 
        default: 
            return state; 
    }
};

export default listingsReducer;