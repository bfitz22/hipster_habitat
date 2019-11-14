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
        this.clearErrors = this.clearErrors.bind(this);
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
                    errors: this.state.errors.push("booking successfully scheduled")
                })
                this.clearErrors()
            } else {
                this.setState({ errors: this.state.errors.push("sign up or login to make a booking") })
                this.clearErrors()
            }
        }
    }

    handleDateClick(check) {
        this.props.openCalendarModal(this.events)
        let checkIn = document.getElementById("check-in-div");
        let checkOut = document.getElementById("check-out-div");
        if (check === "in") {
            this.selectingCheckIn = true;
            checkOut.classList.remove("selecting-div");
            checkIn.classList.add("selecting-div");
        } else {
            this.selectingCheckIn = false;
            checkOut.classList.add("selecting-div");
            checkIn.classList.remove("selecting-div");
        }
    }

    handleNumClick() {
        let box = document.getElementById("guests-div");
        this.state.number ? box.classList.remove("selecting-div") : box.classList.add("selecting-div");
        this.setState({number: !(this.state.number)}) 
    }
    
    selectSlot(slotInfo) {
        let selected = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD");
        let selectedDate = new Date(selected + "T12:00:00Z").getDate();
        let selectedMonth = new Date(selected + "T12:00:00Z").getMonth();
        let today = new Date();
        if (today.getMonth() > selectedMonth || (today.getMonth === selectedMonth && today.getDate() > selectedDate)) { 
            this.setState({ errors: this.state.errors.push("please select an upcoming date") })
            this.clearErrors();
            return
        }
        let tomorrow = new Date(selected + "T12:00:00Z");
        tomorrow.setDate(tomorrow.getDate() + 1);
        let yesterday = new Date(selected + "T12:00:00Z");
        yesterday.setDate(yesterday.getDate() - 1); 
        
        for (let i = 0; i < this.events.length; i++) {
            let apptStart = moment(this.events[i].start.toLocaleString()).format("YYYY-MM-DD");
            let apptEnd = moment(this.events[i].end.toLocaleString()).format("YYYY-MM-DD");
            let apptStartDate = new Date(apptStart + "T12:00:00Z").getDate();
            let apptEndDate = new Date(apptEnd + "T12:00:00Z").getDate();
            let apptStartMonth = new Date(apptStart + "T12:00:00Z").getMonth();
            let apptEndMonth = new Date(apptEnd + "T12:00:00Z").getMonth();
        
            if (this.selectingCheckIn){
                let end = moment(this.state.end.toLocaleString()).format("YYYY-MM-DD");
                let endDate = new Date(end + "T12:00:00Z");
                if (this.state.end === "- - -") {
                    if ((tomorrow.getMonth() === apptStartMonth && tomorrow.getMonth() === apptEndMonth && (tomorrow.getDate() >= apptStartDate && tomorrow.getDate() <= apptEndDate)) ||
                    (tomorrow.getMonth === apptStartMonth && tomorrow.getMonth() !== apptEndMonth && tomorrow.getDate() >= apptStartDate) ||
                    (tomorrow.getMonth() !== apptStartMonth && tomorrow.getMonth() === apptEndMonth && tomorrow.getDate() <= apptEndDate)) {
                        let errors = this.state.errors
                        errors.push("there is a scheduling CONFLICT")
                        this.setState({errors: errors})
                        this.clearErrors();
                        return 
                    } 
                } else if (selectedDate < endDate.getDate()) {
                    if ((selectedDate >= apptStartDate && selectedDate <= apptEndDate) ||
                    (selectedMonth >= apptStartMonth && selectedMonth <= apptEndMonth) ||
                    (apptStartDate >= selectedDate && apptStartDate <= endDate.getDate()) ||
                    (apptStartMonth >= selectedMonth && apptStartMonth <= endDate.getMonth())) { 
                        let errors = this.state.errors
                        errors.push("there is a scheduling CONFLICT")
                        this.setState({errors: errors})
                        this.clearErrors();
                        return 
                    } 
                }
            } else {
                let start = moment(this.state.start.toLocaleString()).format("YYYY-MM-DD");
                let startDate = new Date(start + "T12:00:00Z");
                if (this.state.start === "- - -") {
                    if ((yesterday.getMonth() === apptStartMonth && yesterday.getMonth() === apptEndMonth && (yesterday.getDate() >= apptStartDate && yesterday.getDate() <= apptEndDate)) ||
                    (yesterday.getMonth === apptStartMonth && yesterday.getMonth() !== apptEndMonth && yesterday.getDate() >= apptStartDate) ||
                    (yesterday.getMonth() !== apptStartMonth && yesterday.getMonth() === apptEndMonth && yesterday.getDate() <= apptEndDate)) { 
                        let errors = this.state.errors
                        errors.push("there is a scheduling CONFLICT")
                        this.setState({errors: errors})
                        this.clearErrors();
                        return 
                    } 
                } else if (selectedDate > startDate.getDate()){
                    if ((startDate.getDate() >= apptStartDate && startDate.getDate() <= apptEndDate) ||
                    (startDate.getMonth() >= apptStartMonth && startDate.getMonth() <= apptEndMonth) ||
                    (apptStartDate >= startDate.getDate() && apptStartDate <= selectedDate) ||
                    (apptStartMonth >= startDate.getMonth() && apptStartMonth <= selectedMonth)) { 
                        let errors = this.state.errors
                        errors.push("there is a scheduling CONFLICT")
                        this.setState({errors: errors})
                        this.clearErrors();
                        return 
                    }
                }
            }
        }
        if (this.selectingCheckIn && this.state.end === "- - -") {
            tomorrow = moment(tomorrow.toLocaleString()).format("YYYY-MM-DD");
            this.setState({start: selected, end: tomorrow})
        } else if (this.selectingCheckIn && new Date(selected).getDate() < new Date(moment(this.state.end.toLocaleString()).format("YYYY-MM-DD")).getDate()) {
            this.setState({start: selected})
        } else if (!this.selectingCheckIn && this.state.start === "- - -") {
            yesterday = moment(yesterday.toLocaleString()).format("YYYY-MM-DD");
            this.setState({start: yesterday, end: selected})
        } else if (!this.selectingCheckIn && new Date(selected).getDate() > new Date(moment(this.state.start.toLocaleString()).format("YYYY-MM-DD")).getDate()) {
            this.setState({end: selected})
        }
        this.closeModal();
    }

    selectEvent(event) {
        if (event) {
            let errors = this.state.errors
            errors.push("this slot is already BOOKED")
            this.setState({errors: errors})
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
                        <li className="error-key" key={`error-${i}`}>
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
        document.getElementById("check-in-div").classList.remove("selecting-div");
        document.getElementById("check-out-div").classList.remove("selecting-div");
    }

    clearErrors() {
        let errors = this.state.errors;
        setTimeout(
            function() { errors.shift()
                this.setState({ errors: errors }) }.bind(this),
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
                <div id="check-in-div" className="check-in-div" onClick={() => {this.handleDateClick("in")}}>
                    <section className="check-bold">Check in</section>
                    <section>{this.formatDate(this.state.start)}</section>
                </div>
                <div id="check-out-div" className="check-in-div" onClick={() => {this.handleDateClick("out")}}>
                    <section className="check-bold">Check out</section>
                    <section>{this.formatDate(this.state.end)}</section>
                </div>
                <div id="guests-div" className="guests-div" onClick={this.handleNumClick.bind(this)}>
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