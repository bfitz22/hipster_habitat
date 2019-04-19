import { connect } from 'react-redux';
import Dropdown from './dropdown';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(Dropdown);