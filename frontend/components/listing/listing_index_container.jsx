import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import { selectAllListings } from '../../reducers/selectors';
import { fetchListings } from '../../actions/listing_actions';

const msp = state => ({
    listings: selectAllListings(state)
});

const mdp = dispatch => ({
    fetchListings: () => dispatch(fetchListings())
});

export default connect(msp, mdp)(ListingIndex);