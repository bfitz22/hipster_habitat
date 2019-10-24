import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

class BigCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.localizer = momentLocalizer(moment);
    }

    render() {
        return (
            <div className="calendar-container">
                <Calendar
                    localizer={this.localizer}
                    events={[]}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        )
    }
}

export default BigCalendar; 