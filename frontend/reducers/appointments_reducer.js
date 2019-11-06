import { merge } from 'lodash';
import { RECEIVE_APPOINTMENT } from '../actions/appointment_actions';

const appointmentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_APPOINTMENT:
            return merge({}, state, {[action.appointmentId]: action.appointment} );
        default:
            return state;
    }
}

export default appointmentsReducer;