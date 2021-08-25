import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const Calender = ({ data }) => {  
  const EventsList = data.response.holidays.map(h => ({
    start: new Date(h.date.iso),
    end: new Date(h.date.iso),
    title: h.name
  }))
  return (
    <div>
      {/* <div>
      {data.response.holidays.map(h => (
        <h1>{h.name}</h1>
        ))}
      </div> */}
     
        <Calendar
        localizer={localizer}
        events={EventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      
    </div>
  );
};
export default Calender;