import React, { useState } from 'react';
import './MainCalendarComponent.css';
import MonthlyCalendar from '../monthlyCalendar/MonthlyCalendar';
import WeeklyCalendar from "./../weeklyCalendar/WeeklyCalendar";
import { AiFillCaretLeft } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';

const MainCalendarComponent = ({
    userId,
    isDoctor,
    isPatientVew,
    onBack,
    onBackFromDctorCalendar
}) => {
    const doctorId = useSelector((state) => state.doctorId.value);

    const [weeklyCalendar, setWeeklyCalendar] = useState(false);
    const [monthlyCalendar, setMonthyCalendar] = useState(true);
    const [calendarVew, setCalendarVew] = useState(true);

    function setAllStatesToFalse() {
        setWeeklyCalendar(false);
        setMonthyCalendar(false);
    }

    return (
        <div>
            <div className="col-2 col-md-1 offset-md-1 back" onClick={doctorId === 0 ? onBack : onBackFromDctorCalendar}>
                <AiFillCaretLeft />
            </div>
            <div className="calendar-container">
                {monthlyCalendar ? <MonthlyCalendar
                    isDoctor={isDoctor}
                    isPatientVew={isPatientVew}
                    userId={userId}
                    calendarVew={calendarVew}
                    onCalendarVewChange={() => {
                        setCalendarVew(!calendarVew);
                        setAllStatesToFalse();
                        setWeeklyCalendar(!weeklyCalendar)
                    }}
                /> : null}
                {weeklyCalendar ? <WeeklyCalendar
                    isDoctor={isDoctor}
                    isPatientVew={isPatientVew}
                    userId={userId}
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