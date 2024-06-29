import * as React from React;
import { format } from "date-fns";

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Calendar = () => {
    const currentDate = new Date();
    const firstOfMonth = startOfMonth(currentDate);
    const lastOfMonth = endOfMonth(currentDate);

    const monthDays = eachDayOfInterval({ // Using date-fns insert objects to develop array of dates to loop
        start: firstOfMonth,
        end: lastOfMonth,
    })

    const startIndex = getDay(firstOfMonth); 

        return (
            <div className="container mx-auto p-6">
                <div className="mb-4">
                    <h2 className="text-center">{format(currentDate, "MMMM yyyy")}</h2>
                </div>
                <div className="grid-cols-7 gap-2"> // 7 columns for each day of week
                    {WEEKDAYS.map((day) => {
                        return (
                        <div key={day} className="font-bold text-center">   
                            {day}
                        </div>
                        );
                    })} 

                    {Array.from({length:startIndex }).map((_, index) => {
                        return <div key={'empty-${index}'} className="border rounded-md p-4 text-center"/>
                    })}

                    {monthDays.map((day, index) => {
                        return (
                        <div 
                            key={index} 
                            className={clsx("border rounded-md p-4 text-center", {
                            "bg-gray-200": isToday(day),
                            "text-gray-900": isToday(day),
                        })}
                        >
                            {format(day, "d")} // Pass in day, and render it out
                            {EventSource.filter((event) => isSameDay(event.date, day))
                            .map((event) => {
                                return <div key={event.title}>{event.title}</div>;
                            })} // Check for all events on same day
                        </div>
                    );
                    })}
            </div>
        </div>
        );
};

export default Calendar;