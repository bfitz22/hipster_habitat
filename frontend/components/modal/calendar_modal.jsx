import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BigCalendar from '../listing/booking_box/calendar';

const CalendarModal = ({appointments, closeModal}) => {
    if (!appointments || typeof appointments === 'string') {
        return (
            <div className="booking-button-div">
                <button className="booking-button">Request to book</button>
            </div>
        )
    } else {
        const events = [];
        appointments.map(appointment => {
            events.push({
                start: appointment.start,
                end: appointment.end,
                title: "",
                allDay: true 
            })
        })
        return (
            <>
            <div className="search-background" onClick={closeModal}>
            </div>
            <div className="calendar-child" onClick={e => e.stopPropagation()}>
                <BigCalendar events={events}/>
            </div>
            </>
        )
    }

}

const msp = state => {
    return {
        appointments: state.ui.modal 
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(CalendarModal);