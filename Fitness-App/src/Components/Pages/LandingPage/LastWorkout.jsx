import React from 'react';
import './LastWorkout.css';
import { subDays } from 'date-fns';
import Calendar from './Calendar';

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
