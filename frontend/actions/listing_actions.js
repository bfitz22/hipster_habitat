import * as APIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_MAP_LISTINGS = "RECEIVE_MAP_LISTINGS";
export const UPDATE_CREATION_STATE = "UPDATE_CREATION_STATE";

const receiveListings = listings => {
    return {
    type: RECEIVE_LISTINGS,
    listings
}};

const receiveListing = ({ listing, host }) => {
    return {
        type: RECEIVE_LISTING,
        listingId: listing.id,
        host,
        listing
    };
};

const updateCreationState = (key, value) => {
    return {
        type: UPDATE_CREATION_STATE,
        key,
        value
    }
}

export const fetchListings = () => dispatch => (
    APIUtil.fetchListings().then(
        listings => dispatch(receiveListings(listings))
    )
);
        
export const fetchMapListings = (filters) => dispatch => {
    return APIUtil.fetchMapListings(filters).then(
        listings => dispatch(receiveListings(listings))
)};
    
export const fetchListing = id => dispatch => (
    APIUtil.fetchListing(id).then(
        (response) => dispatch(receiveListing(response))
    )
);

export const createListing = listing => dispatch => (
    APIUtil.createListing(listing).then(
        response => dispatch(receiveListing(response))
    )
);

export const updateCreation = (key, value) => dispatch => {
    return dispatch(updateCreationState(key, value))
};