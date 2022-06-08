import React, { useState } from 'react';
import './MainCalendarComponent.css';
import MonthlyCalendar from '../monthlyCalendar/MonthlyCalendar';

const MainCalendarComponent = () => {
    const [weeklyCalendar, setWeeklyCalendar] = useState(false);
    const [monthlyCalendar, setMonthyCalendar] = useState(true);

    function setAllStatesToFalse() {
        setWeeklyCalendar(false);
        setMonthyCalendar(false);
    }

return(
    <div>
        <div> 

        </div>
        <div className="calendar-container">
            {monthlyCalendar ? <MonthlyCalendar/> : null}
            {weeklyCalendar ? "weeklyCalendar" : null}
        </div>
     </div>
)
}
export default MainCalendarComponent;