import fetchMaptListings from './listing_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = (filter, value) => ({
    type: UPDATE_BOUNDS,
    filter,
    value
});

// export const updateFilter = (filter, value) => (dispatch, getState) => {
//     dispatch(updateBounds(bounds));
//     return fetchMaptListings(getState().ui.filters)(dispatch);
// };