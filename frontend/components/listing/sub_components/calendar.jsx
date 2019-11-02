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
                start: appointment.start,
                end: appointment.end,
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
                    startAccessor="start"
                    endAccessor="end"
                    onSelectSlot={(slotInfo) => this.props.selectSlot(slotInfo)}
                />
            </div>
        )
    }
}

export default BigCalendar; 