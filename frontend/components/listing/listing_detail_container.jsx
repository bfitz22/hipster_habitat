import { connect } from 'react-redux';
import ListingDetail from './listing_detail';
import { fetchListing } from '../../actions/listing_actions';

const msp = (state, ownProps) => {
    const listing = state.entities.listings[ownProps.match.params.listingId];
    const users = state.entities.users
    return {listing, users};
};

const mdp = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id))
 });

export default connect(msp, mdp)(ListingDetail);
