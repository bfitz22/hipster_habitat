import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import { selectAllListings } from '../../reducers/selectors';
import { fetchMapListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';

const msp = state => ({
    listings: selectAllListings(state)
});

const mdp = dispatch => ({
    fetchMapListings: () => dispatch(fetchMapListings(filters)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(msp, mdp)(ListingIndex);