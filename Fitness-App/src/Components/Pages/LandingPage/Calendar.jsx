import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday, isSameDay } from "date-fns";
import clsx from 'clsx';

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Calendar = ({ events }) => {
    const currentDate = new Date();
    const firstOfMonth = startOfMonth(currentDate);
    const lastOfMonth = endOfMonth(currentDate);

    const monthDays = eachDayOfInterval({
        start: firstOfMonth,
        end: lastOfMonth,
    });

    const startIndex = getDay(firstOfMonth);

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <h2>{format(currentDate, "MMMM yyyy")}</h2>
            </div>
            <div className="calendar-grid">
                {WEEKDAYS.map((day) => (
                    <div key={day} className="calendar-weekday">
                        {day}
                    </div>
                ))}

                {Array.from({ length: startIndex }).map((_, index) => (
                    <div key={`empty-${index}`} className="calendar-day empty" />
                ))}

                {monthDays.map((day, index) => (
                    <div
                        key={index}
                        className={clsx("calendar-day", {
                            "today": isToday(day),
                            "has-event": events.some((event) => isSameDay(event.date, day)),
                        })}
                    >
                        {format(day, "d")}
                        {events.filter((event) => isSameDay(event.date, day)).map((event) => (
                            <div key={event.title} className="event">
                                {event.title}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
