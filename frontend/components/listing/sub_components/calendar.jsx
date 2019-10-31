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
        return (
            <div className="calendar-container">
                <Calendar
                    localizer={this.localizer}
                    events={this.props.events}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        )
    }
}

export default BigCalendar; 