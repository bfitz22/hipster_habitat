import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
    };
};

const demoUser = {
    email_address: "yogibear@picnicbasket.com",
    password: "123456",
    first_name: "Yogi",
    last_name: "Bear" 
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button className="other-button" onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        demo: () => dispatch(login(demoUser))
    }
};

export default connect(msp, mdp)(SessionForm);