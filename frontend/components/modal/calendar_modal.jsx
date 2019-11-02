import React from 'react';
import { openObjectModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BigCalendar from '../listing/sub_components/calendar';
import moment from 'moment';

class CalendarModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check_in: "- - -",
            check_out: "- - -",
            num_guests: "",
            listing_id: this.props.listing.id,
            number: false
        }
        this.selectingCheckIn;
        this.events = this.props.listing.appointments;
        this.handleDateClick = this.handleDateClick.bind(this);
        this.selectSlot = this.selectSlot.bind(this);
        this.updateGuests = this.updateGuests.bind(this);
    }

    handleDateClick(check) {
        let events = this.events.slice();
        let event = {
            title: "current selection",
            start: this.state.check_in,
            end: this.state.check_out
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
            if (this.state.check_out === "- - -") {
                this.setState({check_in: start, check_out: start})
            } else { 
                this.setState({check_in: start}) 
            }
        } else {
            if (this.state.check_in === "- - -") {
                this.setState({check_in: end, check_out: end})
            } else {
                this.setState({check_out: end})
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


    closeModal() {
        this.props.closeModal();
    }

    render() {
        // debugger
        let i;
        const max = this.props.listing.max_capacity;
        const options= [];
        for (i = 1; i <= max; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }

        const guestDisplay = this.state.number ?
        <select className="guest-select" value={this.state.num_guests} onChange={this.updateGuests}>{options}</select>
        : <section>Max: {max}</section>

        const bookingDiv = 
            <div className="booking-div">
                <div className="check-in-div" onClick={() => {this.handleDateClick("in")}}>
                    <section className="check-bold">Check in</section>
                    <section>{this.state.check_in}</section>
                </div>
                <div className="check-in-div" onClick={() => {this.handleDateClick("out")}}>
                    <section className="check-bold">Check out</section>
                    <section>{this.state.check_out}</section>
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
                    <button className="booking-button">Request to book</button>
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