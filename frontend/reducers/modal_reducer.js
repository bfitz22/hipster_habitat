import { OPEN_MODAL, OPEN_SEARCH_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
    switch(action.type) {
        case OPEN_MODAL: 
            return action.modal;
        case OPEN_SEARCH_MODAL:
            return action.listings;
        case CLOSE_MODAL: 
            return null; 
        default: 
            return state; 
    }
};

export default modalReducer;