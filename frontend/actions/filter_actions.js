import fetchMaptListings from './listing_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const upddateBounds = bounds => ({
    type: UPDATE_BOUNDS,
    bounds
});