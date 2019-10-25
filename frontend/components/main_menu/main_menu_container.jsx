import { connect } from 'react-redux';
import MainMenu from './main_menu';
import { selectAllListings } from '../../reducers/selectors';
import { fetchListings } from '../../actions/listing_actions';

import { openObjectModal, closeModal } from '../../actions/modal_actions';

const msp = state => ({
    listings: selectAllListings(state)
});

const mdp = dispatch => ({
    fetchListings: () => dispatch(fetchListings()),
    openSearchModal: listings => dispatch(openObjectModal(listings)),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(MainMenu);