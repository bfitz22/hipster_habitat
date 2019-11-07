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
            title: "",
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
        let tomorrow = new Date(start);
        tomorrow.setDate(tomorrow.getDate() + 2);
        let end = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD");
        let yesterday = new Date(end);
        yesterday.setDate(yesterday.getDate());
        let i;
        for (i = 0; i < this.events.length; i++) {
            if ((start >= this.events[i].start && start <= this.events[i].end) ||
            (this.events[i].start >= start && this.events[i].start <= end)) { return null };
        }
        if (this.selectingCheckIn){
            if (this.state.end === "- - -") {
                tomorrow = moment(tomorrow.toLocaleString()).format("YYYY-MM-DD");
                this.setState({start: start, end: tomorrow})
            } else { 
                this.setState({start: start}) 
            }
        } else {
            if (this.state.start === "- - -") {
                yesterday = moment(yesterday.toLocaleString()).format("YYYY-MM-DD");
                this.setState({start: yesterday, end: end})
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
        const options= [<option key="0" value=""></option>];
        for (i = 1; i <= max; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
         
        if (this.state.number) {
            guestDisplay = <select className="guest-select" value={this.state.num_guests} onChange={this.updateGuests}>{options}</select>
        } else {
            if (this.state.num_guests === "") {
                guestDisplay = <>
                    <section className="check-guests">Guests</section>
                    <section className="guest-display">Max: {max}</section>
                </>
            } else {
                guestDisplay = <>
                    <section className="check-guests">Guests</section>
                    <section className="guest-display">{this.state.num_guests} Guests</section>
                </>
            }
        }
        
        let numNights;
        if (this.state.start !== "- - -") {
            numNights = new Date(moment(this.state.end.toLocaleString()).format("YYYY-MM-DD")).getDate() - new Date(moment(this.state.start.toLocaleString()).format("YYYY-MM-DD")).getDate() 
        } else {
            numNights = 2;
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
                    {guestDisplay}
                </div>
            </div>

        let bookingButton;
        if (this.state.start === "- - -" || this.state.num_guests === "") {
            bookingButton = <button className="not-booking-button">Request to book</button>
        } else {
            bookingButton = <button className="booking-button" onClick={this.handleClick.bind(this)}>Request to book</button>
        }

        if (!this.props.appointments || typeof this.props.appointments === 'string') {
            return (
                <>
                {bookingDiv}
                <div className="booking-div-space">
                    <section className="base-price">Base price x {numNights} nights</section>
                    <br/>
                    <section>${`${this.props.listing.price}` * `${numNights}`}</section>
                </div>
                <div className="booking-button-div">
                    {bookingButton}
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