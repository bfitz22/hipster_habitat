import * as APIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_MAP_LISTINGS = "RECEIVE_MAP_LISTINGS";

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
});

// const receiveMapListings = listings => ({
//     type: RECEIVE_MAP_LISTINGS,
//     listings
// });

const receiveListing = ({listing}) => {
    return ({
    type: RECEIVE_LISTING,
    listingId: listing.id,
    listing,
    // host 
    });
};

export const fetchListings = () => dispatch => (
    APIUtil.fetchListings().then(
        listings => dispatch(receiveListings(listings))
    )
);

// export const fetchMapListings = (filters) => dispatch => (
//     APIUtil.fetchMapListings().then(
//         listings => dispatch(receiveMapListings(listings))
//     )
// );

export const fetchListing = id => dispatch => (
    APIUtil.fetchListing(id).then(
        (listing) => dispatch(receiveListing(listing))
    )
);