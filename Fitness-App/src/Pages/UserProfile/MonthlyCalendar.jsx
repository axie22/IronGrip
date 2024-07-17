import React from 'react';
import { subDays } from 'date-fns';
import Calendar from '../../Components/Calendar';
import styles from '../../assets/MonthlyCalendar.module.css';

function MonthlyCalendar() {
  const handleDateClick = (date) => {
    console.log('Date clicked:', date); // Eventual navigation to backend workout card containers
  };

  return (
    <div className={styles.monthlyCalendarContainer}> {/* Use CSS module class */}
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
  );
}

export default MonthlyCalendar;
