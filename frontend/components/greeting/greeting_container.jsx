import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const msp = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(Greeting);