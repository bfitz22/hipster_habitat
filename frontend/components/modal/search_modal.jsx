import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SearchResults from '../main_menu/search_results';

const SearchModal = ({listings, closeModal}) => {
    if (!listings || typeof listings === 'string' || listings instanceof String) {
        return null;
    } else {
        return (
            <>
            <div className="search-background" onClick={closeModal}>
            </div>
            <div className="search-child" onClick={e => e.stopPropagation()}>
                {listings.map(listing => <SearchResults key={listing.id} listing={listing}/>)}
            </div>
            </>
        );
    }
}

const msp = state => {
    return {
        listings: state.ui.modal
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(SearchModal);