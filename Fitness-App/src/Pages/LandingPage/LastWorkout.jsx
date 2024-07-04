import React from 'react';
import { subDays } from 'date-fns';
import Calendar from './Calendar';
import '../../assets/LastWorkout.css';

function LastWorkout() {
  return (
    <div>
      <div className="title">
        <h2>Recent Workout</h2>
      </div>
      <div>
        <Calendar
          events={[
            { date: subDays(new Date(), 1), title: "Code" },
            { date: subDays(new Date(), 3), title: "Coding" },
            { date: subDays(new Date(), 6), title: "Will code" },
          ]}
        />
      </div>
    </div>
  );
}

export default LastWorkout;
