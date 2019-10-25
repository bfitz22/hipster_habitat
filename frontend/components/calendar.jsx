import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

class BigCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.event = [
            {
                start: "2019-10-25",
                end: "2019-10-27",
                title: "Title",
                allDay: true 
            }
        ]
        this.localizer = momentLocalizer(moment);
    }

    setDates() {
        const events = []
        this.props.events.map(event => {
            return events.push({
                start: new Date(event.start),
                end: new Date(event.end),
                title: "Title",
                allDay: true 
            })
        })
    }

    render() {
        return (
            <div className="calendar-container">
                <Calendar
                    localizer={this.localizer}
                    events={this.event}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        )
    }
}

export default BigCalendar; 