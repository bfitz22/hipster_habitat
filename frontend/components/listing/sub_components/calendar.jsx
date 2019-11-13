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

    render() {
        const events = [];
        this.props.appointments.map(appointment => {
            events.push({
                start: new Date(appointment.start + "T12:00:00Z"),
                end: new Date(appointment.end + "T12:05:00Z"),
                title: appointment.title ? appointment.title : "",
                allDay: true
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
                />
            </div>
        )
    }
}

export default BigCalendar; 