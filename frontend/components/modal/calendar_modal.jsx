import React from 'react';
import { openObjectModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BigCalendar from '../listing/sub_components/calendar';

// const CalendarModal = ({appointments, closeModal, listing}) => {
class CalendarModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check_in: "2019-11-13",
            check_out: "2019-11-15",
            num_guests: "",
            listing_id: this.props.listing.id
        }
        this.appointments = this.props.listing.appointments;
    }

    handleClick() {
        let event = {
            start: this.state.check_in,
            end: this.state.check_out
        }
        this.appointments.push(event);
        debugger
        this.props.openCalendarModal(this.appointments)
    }

    closeModal() {
        this.props.closeModal();
    }

    render() {
        const bookingDiv = 
            <div className="booking-div">
                <div className="check-in-div" onClick={this.handleClick.bind(this)}>
                    <section className="check-bold">Check in</section>
                    <section>{this.props.listing.check_in}</section>
                </div>
                <div className="check-in-div" onClick={this.handleClick.bind(this)}>
                    <section className="check-bold">Check out</section>
                    <section>{this.props.listing.check_out}</section>
                </div>
                <div className="guests-div">
                    <section className="check-bold">Guests</section>
                    <section>Max: {this.props.listing.max_capacity}</section>
                </div>
            </div>

        if (!this.props.appointments || typeof this.props.appointments === 'string') {
            return (
                <>
                {bookingDiv}
                <div className="booking-div-space">
                    <section className="base-price">Base price x 2 nights</section>
                    <br/>
                    <section>${`${this.props.listing.price}` * 2}</section>
                </div>
                <div className="booking-button-div">
                    <button className="booking-button">Request to book</button>
                </div>
                </>
            )
        } else {
            const events = [];
            this.props.appointments.map(appointment => {
                events.push({
                    start: appointment.start,
                    end: appointment.end,
                    title: "",
                    allDay: true
                })
            })
            return (
                <>
                {bookingDiv}
                <div className="search-background" onClick={this.closeModal.bind(this)}>
                </div>
                <div className="calendar-child" onClick={e => e.stopPropagation()}>
                    <BigCalendar events={events}/>
                </div>
                </>
            )
        }
    }

}

const msp = state => {
    return {
        appointments: state.ui.modal 
    };
};

const mdp = dispatch => {
    return {
        openCalendarModal: appointments => dispatch(openObjectModal(appointments)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(CalendarModal);