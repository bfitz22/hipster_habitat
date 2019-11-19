import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

class BigCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.localizer = momentLocalizer(moment);
        this.state;
    }

    eventStyleGetter(event, start, end, isSelected) {
        var backgroundColor = '#' + event.hexColor;
        var style = {
            backgroundColor: backgroundColor,
        };
        return {
            style: style
        };
    }

    render() {
        const events = [];
        this.props.appointments.map(appointment => {
            events.push({
                start: new Date(appointment.start + "T12:00:00Z"),
                end: new Date(appointment.end + "T12:05:00Z"),
                allDay: true,
                hexColor: appointment.user_id === this.props.currentUser ? "40d9ac" : "e6e6e6"
            })
        })
        return (
            <div className="calendar-container">
                <Calendar
                    views={['month']}
                    selectable="ignoreEvents"
                    localizer={this.localizer}
                    events={events}
                    onSelectSlot={(slotInfo) => this.props.selectSlot(slotInfo)}
                    onSelectEvent={event => this.props.selectEvent(event)}
                    eventPropGetter={this.eventStyleGetter}
                />
            </div>
        )
    }
}

export default BigCalendar; 