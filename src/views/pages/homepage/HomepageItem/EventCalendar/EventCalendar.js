import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./eventcalendar.css";
import { firestore } from "../../../../../firebase/firebase.utils";

const localizer = momentLocalizer(moment);

const EventCalendar = (props) => {
  const [eventList, setEventList] = React.useState([]);
  const [error, setError] = React.useState("");

  const fetchEvent = () => {
    firestore
      .collection("eventCalender")
      .get()
      .then((response) => {
        const fetchedEvent = [];
        response.docs.forEach((document) => {
          const fetched = {
            ...document.data(),
          };
          fetchedEvent.push(fetched);
        });
        setEventList(fetchedEvent);
      })
      .catch((error) => {
        setError(error);
      });
  };

  React.useEffect(() => {
    // get the whole collection
    fetchEvent();
  }, []);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
export default EventCalendar;
