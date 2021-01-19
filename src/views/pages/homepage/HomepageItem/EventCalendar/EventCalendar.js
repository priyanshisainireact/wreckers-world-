import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './eventcalendar.css';

const localizer = momentLocalizer(moment);
const myEventsList = [
    {
        start: '2021-01-01',
        end: '2021-01-05',
        eventClasses: 'optionalEvent',
        title: 'NSW Caravan Camping Holiday Supershow',
        description: 'This is a test description of an event',
    },
    {
        start: '2021-01-13',
        end: '2021-01-19',
        title: 'Australian Auto Aftermarket Expo',
        description: 'This is a test description of an event',
        data: 'you can add what ever random data you may want to use later',
    },
];
const EventCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)
export default EventCalendar;