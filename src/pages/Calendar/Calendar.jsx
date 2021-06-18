import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default class EventCalendar extends Component{

    render(){
        return (
            <FullCalendar 
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            events={[
                {title:'제발...', date:'2021-06-15'},
                {title:'하.....', date:'2021-06-14'}
            ]}
            />
        )
    }

}