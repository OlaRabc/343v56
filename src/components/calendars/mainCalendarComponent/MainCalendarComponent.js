import React, { useState } from 'react';
import './MainCalendarComponent.css';
import MonthlyCalendar from '../monthlyCalendar/MonthlyCalendar';
import { AiFillCaretLeft} from "react-icons/ai";

const MainCalendarComponent = ({
    onBack
}) => {
    const [weeklyCalendar, setWeeklyCalendar] = useState(false);
    const [monthlyCalendar, setMonthyCalendar] = useState(true);

    function setAllStatesToFalse() {
        setWeeklyCalendar(false);
        setMonthyCalendar(false);
    }

return(
    <div>
        <div className="col-2 col-md-1 offset-md-1 back" onClick={onBack}> 
            <AiFillCaretLeft/>
        </div>
        <div className="calendar-container">
            {monthlyCalendar ? <MonthlyCalendar/> : null}
            {weeklyCalendar ? "weeklyCalendar" : null}
        </div>
     </div>
)
}
export default MainCalendarComponent;