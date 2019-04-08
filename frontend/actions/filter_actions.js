import { fetchMapListings } from './listing_actions';

export const CHANGE_FILTER = "CHANGE_FILTER";

export const changeFilter = (filter, value) => {
    return ({
    type: CHANGE_FILTER,
    filter, 
    value
    })
};

export function updateFilter(filter, value) {
    return (dispatch, getState) => {
        dispatch(updateBounds(filter, value));
        return fetchMapListings(getState().ui.filters)(dispatch);
    }
};