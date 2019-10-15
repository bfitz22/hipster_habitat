import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import DropdownContainer from '../dropdown/dropdown_container';

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }
    let component; let option; let host = "/#/listing_create/";
    switch(modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'dropdown':
            option = 2;
            component = <DropdownContainer />;
            break; 
        case 'login-host':
            component = <LoginFormContainer host={host}/>;
            break;
        default: 
            return null; 
    }

    if (option === 2) {
        return (
            <div className="dropdown-background" onClick={closeModal}>
                <div className="dropdown-child" onClick={e => e.stopPropagation()}>
                    { component }
                </div>
            </div>
        );
    } else {
        return (
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    { component }
                </div>
            </div>
        );
    }
}

const msp = state => {
    return {
        modal: state.ui.modal
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(Modal);