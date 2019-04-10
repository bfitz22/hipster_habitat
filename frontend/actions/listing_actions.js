import * as APIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_MAP_LISTINGS = "RECEIVE_MAP_LISTINGS";
export const UPDATE_CREATION = "UPDATE_CREATION";

const receiveListings = listings => {
    return {
    type: RECEIVE_LISTINGS,
    listings
}};

const receiveListing = ({ listing }) => {
    return ({
        type: RECEIVE_LISTING,
        listingId: listing.id,
        listing,
        // host 
    });
};

export const updateCreation = (key, value) => {
    return ({
        type: UPDATE_CREATION,
        key,
        value
    })
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
        (listing) => dispatch(receiveListing(listing))
    )
);