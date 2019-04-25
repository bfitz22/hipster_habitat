import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import { selectAllListings } from '../../reducers/selectors';
import { fetchMapListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';

const msp = state => {
    let filter = state.ui.filters;
    return (
    {listings: selectAllListings(state),
    filter: filter}
    );
};

const mdp = dispatch => ({
    fetchMapListings: (filter) => dispatch(fetchMapListings(filter)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(msp, mdp)(ListingIndex);