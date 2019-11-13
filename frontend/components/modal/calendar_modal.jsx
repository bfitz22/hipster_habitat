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
            number: false,
            errors: []
        }
        this.selectingCheckIn;
        this.events = this.props.listing.appointments;
        this.handleDateClick = this.handleDateClick.bind(this);
        this.selectSlot = this.selectSlot.bind(this);
        this.updateGuests = this.updateGuests.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleClick() {
        if (this.state.start !== "- - -" && this.state.end !== "- - -"
        && this.num_guests !== "") {
            if (this.state.user_id) {
                this.props.createAppointment(this.state);
                this.setState({ 
                    start: "- - -",
                    end: "- - -",
                    num_guests: "",
                    errors: ["booking successfully scheduled"] 
                })
                this.clearErrors()
            } else {
                this.setState({ errors: ["sign up or login to make a booking"] })
                this.clearErrors()
            }
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
        let end = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD");
        let startDate = new Date(start + "T12:00:00Z").getDate();
        let endDate = new Date(end + "T12:00:00Z").getDate();
        let tomorrow = new Date(start + "T12:00:00Z");
        tomorrow.setDate(tomorrow.getDate() + 1);
        let yesterday = new Date(end + "T12:00:00Z");
        yesterday.setDate(yesterday.getDate() - 1); 
        
        for (let i = 0; i < this.events.length; i++) {
            let apptStart = moment(this.events[i].start.toLocaleString()).format("YYYY-MM-DD");
            let apptEnd = moment(this.events[i].end.toLocaleString()).format("YYYY-MM-DD");
            let apptStartDate = new Date(apptStart + "T12:00:00Z").getDate();
            let apptEndDate = new Date(apptEnd + "T12:00:00Z").getDate();
        
            if (this.selectingCheckIn){
                if (this.state.end === "- - -") {
                    if ((tomorrow.getDate() >= apptStartDate && tomorrow.getDate() <= apptEndDate) ||
                    (apptStartDate >= startDate && apptStartDate <= tomorrow.getDate())) { 
                        this.setState({errors: ["there is a scheduling conflict"]})
                        this.clearErrors();
                        return 
                    } 
                } else if (new Date(start).getDate() < new Date(moment(this.state.end.toLocaleString()).format("YYYY-MM-DD")).getDate()) {
                    if ((startDate >= apptStartDate && startDate <= apptEndDate) ||
                    (apptStartDate >= startDate && apptStartDate <= new Date(moment(this.state.end.toLocaleString()).format("YYYY-MM-DD")).getDate())) { 
                        this.setState({errors: ["there is a scheduling conflict"]})
                        this.clearErrors();
                        return 
                    } 
                }
            } else {
                if (this.state.start === "- - -") {
                    if ((yesterday.getDate() >= apptStartDate && yesterday.getDate() <= apptEndDate) ||
                    (apptStartDate >= yesterday.getDate() && apptStartDate <= endDate)) { 
                        this.setState({errors: ["there is a scheduling conflict"]})
                        this.clearErrors();
                        return 
                    } 
                } else if (new Date(end).getDate() > new Date(moment(this.state.start.toLocaleString()).format("YYYY-MM-DD")).getDate()){
                    if ((new Date(moment(this.state.start.toLocaleString()).format("YYYY-MM-DD")).getDate() >= apptStartDate && new Date(moment(this.state.start.toLocaleString()).format("YYYY-MM-DD")).getDate() <= apptEndDate) ||
                    (apptStartDate >= new Date(moment(this.state.start.toLocaleString()).format("YYYY-MM-DD")).getDate() && apptStartDate <= endDate)) { 
                        this.setState({errors: ["there is a scheduling conflict"]})
                        this.clearErrors();
                        return 
                    }
                }
            }
        }
        if (this.selectingCheckIn && this.state.end === "- - -") {
            tomorrow = moment(tomorrow.toLocaleString()).format("YYYY-MM-DD");
            this.setState({start: start, end: tomorrow})
        } else if (this.selectingCheckIn && new Date(start).getDate() < new Date(moment(this.state.end.toLocaleString()).format("YYYY-MM-DD")).getDate()) {
            this.setState({start: start})
        } else if (!this.selectingCheckIn && this.state.start === "- - -") {
            yesterday = moment(yesterday.toLocaleString()).format("YYYY-MM-DD");
            this.setState({start: yesterday, end: end})
        } else if (!this.selectingCheckIn && new Date(end).getDate() > new Date(moment(this.state.start.toLocaleString()).format("YYYY-MM-DD")).getDate()) {
            this.setState({end: end})
        }
        this.closeModal();
    }

    selectEvent(event) {
        if (event) {
            this.setState({errors: ["this slot is already booked"]});
            this.clearErrors();
        }
    }
    
    renderErrors() {
        if (this.state.errors.length > 0) {
            let css = this.state.errors[0] === "booking successfully scheduled" ? "booking-success" : "booking-errors";
            let icon = this.state.errors[0] === "booking successfully scheduled" ? "fas fa-check-circle" : "fas fa-exclamation-circle";
            return (
                <ul className={css}>
                    {this.state.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            <i className={icon}></i> {error}
                        </li>
                    ))}
                </ul>
            )
        }
    }

    updateGuests(e) {
        let num_guests = e.currentTarget.value
        if (num_guests <= this.props.listing.max_capacity) {
            this.setState({ num_guests: num_guests })
        } else {
            this.setState({ num_guests: 2 })
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

    clearErrors() {
        setTimeout(
            function() { this.setState({ errors: [] }) }.bind(this),
            3000
        );
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
                {this.renderErrors()}
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
                        selectEvent={event => this.selectEvent(event)}
                    />
                    {this.renderErrors()}
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