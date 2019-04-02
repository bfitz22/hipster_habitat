import { connect } from 'react-redux';
import MainMenu from './main_menu';
import { selectAllListings } from '../../reducers/selectors';
import { fetchListings } from '../../actions/listing_actions';

const msp = state => ({
    listings: selectAllListings(state).slice(0, 3)
});

const mdp = dispatch => ({
    fetchListings: () => dispatch(fetchListings())
});

export default connect(msp, mdp)(MainMenu);