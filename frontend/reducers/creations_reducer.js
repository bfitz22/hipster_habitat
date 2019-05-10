import { UPDATE_CREATION_STATE } from '../actions/listing_actions';
import { merge } from 'lodash';

const creationsReducer = (state = {title: "d", description: "c", host_id: 46, lat: 5, lng: 5, location: "c", check_in: "4", check_out: "23", max_capacity: 4, price: 3, site: "tent",
amenity: [["is_pets", true], ["is_campfires", true], ["is_water", true], ["is_toilets", false], ["is_showers", false], ["is_wifi", false], ["is_hiking", true],
["is_biking", true], ["is_swimming", false], ["is_fishing", true], ["is_horseback", true], ["is_climbing", true]]}, action) => {
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