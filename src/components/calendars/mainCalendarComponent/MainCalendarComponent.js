import React, { useState } from 'react';
import './MainCalendarComponent.css';
import MonthlyCalendar from '../monthlyCalendar/MonthlyCalendar';
import WeeklyCalendar from "./../weeklyCalendar/WeeklyCalendar";
import { AiFillCaretLeft } from "react-icons/ai";

const MainCalendarComponent = ({
    isDoctor,
    onBack
}) => {
    const [weeklyCalendar, setWeeklyCalendar] = useState(false);
    const [monthlyCalendar, setMonthyCalendar] = useState(true);
    const [calendarVew, setCalendarVew] = useState(true);

    function setAllStatesToFalse() {
        setWeeklyCalendar(false);
        setMonthyCalendar(false);
    }
    
    return (
        <div>
            <div className="col-2 col-md-1 offset-md-1 back" onClick={onBack}>
                <AiFillCaretLeft />
            </div>
            <div className="calendar-container">
                {monthlyCalendar ? <MonthlyCalendar
                    isDoctor={isDoctor}
                    calendarVew={calendarVew}
                    onCalendarVewChange={() => {
                        setCalendarVew(!calendarVew);
                        setAllStatesToFalse();
                        setWeeklyCalendar(!weeklyCalendar)
                    }}
                /> : null}
                {weeklyCalendar ? <WeeklyCalendar
                    isDoctor={isDoctor}
                    calendarVew={calendarVew}
                    onCalendarVewChange={() => {
                        setCalendarVew(!calendarVew);
                        setAllStatesToFalse();
                        setMonthyCalendar(!monthlyCalendar)
                    }}
                /> : null}
            </div>
        </div>
    )
}
export default MainCalendarComponent;