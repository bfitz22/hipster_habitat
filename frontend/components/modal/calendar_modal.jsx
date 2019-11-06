import React from 'react';
import { createAppointment } from '../../actions/appointment_actions';
import { openObjectModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BigCalendar from '../listing/sub_components/calendar';
import moment from 'moment';

class CalendarModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: "- - -",
            end: "- - -",
            num_guests: "",
            listing_id: this.props.listing.id,
            user_id: this.props.currentUser,
            number: false
        }
        this.selectingCheckIn;
        this.events = this.props.listing.appointments;
        this.handleDateClick = this.handleDateClick.bind(this);
        this.selectSlot = this.selectSlot.bind(this);
        this.updateGuests = this.updateGuests.bind(this);
    }
    
    handleClick() {
        if (this.state.start !== "- - -" && this.state.end !== "- - -"
        && this.num_guests !== "") {
            this.props.createAppointment(this.state)
        }
    }

    handleDateClick(check) {
        let events = this.events.slice();
        let event = {
            title: "current",
            start: this.state.start,
            end: this.state.end
        }
        events.push(event);
        this.props.openCalendarModal(events)
        check === "in" ? this.selectingCheckIn = true : this.selectingCheckIn = false;
    }

    handleNumClick() {
        this.setState({number: !(this.state.number)}) 
    }
    
    selectSlot(slotInfo) {
        let start = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD");
        let end = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD");
        let i;
        for (i = 0; i < this.events.length; i++) {
            if ((start >= this.events[i].start && start <= this.events[i].end) ||
            (this.events[i].start >= start && this.events[i].start <= end)) { return null };
        }
        if (this.selectingCheckIn){
            if (this.state.end === "- - -") {
                this.setState({start: start, end: start})
            } else { 
                this.setState({start: start}) 
            }
        } else {
            if (this.state.start === "- - -") {
                this.setState({start: end, end: end})
            } else {
                this.setState({end: end})
            }
        }
        this.closeModal();
    }

    updateGuests(e) {
        let num_guests = e.currentTarget.value
        if (num_guests <= this.props.listing.max_capacity) {
            this.setState({
                num_guests: num_guests
            })
        } else {
            this.setState({
                num_guests: 2
            })
        }
    }

    formatDate(date) {
        if (date === "- - -") {return date}
        let newDate = new Date(date + "T12:00:00Z");
        var monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct", "Nov", "Dec"
          ];
        return monthNames[newDate.getMonth()] + " " + newDate.getDate() + " " + newDate.getFullYear()
    }

    closeModal() {
        this.props.closeModal();
    }

    render() {
        let i;
        let guestDisplay;
        const max = this.props.listing.max_capacity;
        const options= [""];
        for (i = 1; i <= max; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }

         
        if (this.state.number) {
            guestDisplay = <select className="guest-select" value={this.state.num_guests} onChange={this.updateGuests}>{options}</select>
        } else {
            if (this.state.num_guests === "") {
                guestDisplay = <section className="guest-display">Max: {max}</section>
            } else {
                guestDisplay = <section className="guest-display">{this.state.num_guests} Guests</section>
            }
        }
        

        const bookingDiv = 
            <div className="booking-div">
                <div className="check-in-div" onClick={() => {this.handleDateClick("in")}}>
                    <section className="check-bold">Check in</section>
                    <section>{this.formatDate(this.state.start)}</section>
                </div>
                <div className="check-in-div" onClick={() => {this.handleDateClick("out")}}>
                    <section className="check-bold">Check out</section>
                    <section>{this.formatDate(this.state.end)}</section>
                </div>
                <div className="guests-div" onClick={this.handleNumClick.bind(this)}>
                    <section className="check-guests">Guests</section>
                    {guestDisplay}
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
                    <button className="booking-button" onClick={this.handleClick.bind(this)}>Request to book</button>
                </div>
                </>
            )
        } else {
            return (
                <>
                {bookingDiv}
                <div className="search-background" onClick={this.closeModal.bind(this)}>
                </div>
                <div className="calendar-child" onClick={e => e.stopPropagation()}>
                    <BigCalendar 
                        appointments={this.props.appointments}
                        selectSlot={slotInfo => this.selectSlot(slotInfo)}
                    />
                </div>
                </>
            )
        }
    }

}

const msp = state => {
    return {
        appointments: state.ui.modal,
        currentUser: state.session.id 
    };
};

const mdp = dispatch => {
    return {
        openCalendarModal: appointments => dispatch(openObjectModal(appointments)),
        closeModal: () => dispatch(closeModal()),
        createAppointment: appointment => dispatch(createAppointment(appointment))
    };
};

export default connect(msp, mdp)(CalendarModal);