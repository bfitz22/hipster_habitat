import { UPDATE_CREATION_STATE } from '../actions/listing_actions';
import { merge } from 'lodash';

const creationsReducer = (state = {title: "", description: "", host_id: "", lat: "", lng: "", 
    location: "", street: "", zip: "", check_in: "", check_out: "", max_capacity: "", price: "", site: "",
    amenity: [["is_pets", null], ["is_campfires", null], ["is_water", null], ["is_toilets", null], ["is_showers", null], 
    ["is_wifi", null], ["is_hiking", null], ["is_biking", null], ["is_swimming", null], ["is_fishing", null], 
    ["is_horseback", null], ["is_climbing", null]]}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case UPDATE_CREATION_STATE:
            const newListing = { [action.key]: action.value }
            return merge({}, state, newListing);
        default: 
            return state
    }
}

export default creationsReducer;