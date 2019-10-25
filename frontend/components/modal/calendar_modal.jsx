import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BigCalendar from '../calendar';

const CalendarModal = ({appointments, closeModal}) => {
    if (!appointments || typeof appointments === 'string') {
        return null;
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