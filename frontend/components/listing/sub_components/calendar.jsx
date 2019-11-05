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

    // componentDidMount() {
    //     let events = document.getElementsByClassName("rbc-event");
    //     debugger
    //     for (var i = 0; i < events.length; i++) {
    //         for(var j = 0; j < events[i].children.length; j++)
    //         events[i].children[j].title === "current" ? events[i].style.backgroundColor = "#40d9ac" : events[i].style.backgroundColor = "#e6e6e6"
    //     }
    // }

    // eventStyleGetter(event) {
    //     console.log(event);
    //     var backgroundColor = event.hexColor;
    //     var style = {
    //         backgroundColor: backgroundColor
    //     };
    //     return {
    //         style: style
    //     };
    // }

    render() {
        const events = [];
        this.props.appointments.map(appointment => {
            events.push({
                start: new Date(appointment.start + "T12:00:00Z"),
                end: new Date(appointment.end + "T12:05:00Z"),
                title: appointment.title ? appointment.title : "booked",
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
                    // eventPropGetter={this.eventStyleGetter(event)}
                />
            </div>
        )
    }
}

export default BigCalendar; 