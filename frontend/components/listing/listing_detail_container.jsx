import { connect } from 'react-redux';
import ListingDetail from './listing_detail';
import { fetchListing } from '../../actions/listing_actions';

const msp = (state, ownProps) => {
    const listing = state.entities.listings[ownProps.match.params.listingId];
}