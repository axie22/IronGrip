import React from 'react';
import { subDays } from 'date-fns';
import Calendar from '../../Components/Calendar';
import '../../assets/LastWorkout.css';

function LastWorkout() {
  const handleDateClick = (date) => {
    console.log('Date clicked:', date); // Eventual navigation to backend workout card containers
  };

  return (
    <div>
      <div className="title">
        <h2>Recent Workout</h2>
      </div>
      <div>
        <Calendar
          events={[
            { date: subDays(new Date(), 1), title: "Coded" },
            { date: subDays(new Date(), 3), title: "Code" },
            { date: subDays(new Date(), 6), title: "Will code" },
            { date: subDays(new Date(), 12), title: "Definitely code" },
          ]}
          onDateClick={handleDateClick} // Pass onDateClick handler
        />
      </div>
    </div>
  );
}

export default LastWorkout;
