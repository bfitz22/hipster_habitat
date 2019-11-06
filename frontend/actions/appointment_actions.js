import * as APIUtil from '../util/appointment_api_util';

export const RECEIVE_APPOINTMENT = "RECEIVE_APPOINTMENT";

const receiveAppointment = ({ appointment }) => {
    return {
        type: RECEIVE_APPOINTMENT,
        appointmentId: appointment.id,
        appointment
    }
}

export const createAppointment = appointment => dispatch => {
    return APIUtil.createAppointment(appointment).then(
        response => dispatch(receiveAppointment(response))
    )
}