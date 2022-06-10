import './DoctorPage.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import DoctorNavigation from "./../../navigation/doctorNavigation/DoctorNavigation";
import DoctrOperationVew from "./../../doctor/doctrOperationVew/DoctrOperationVew"
import MainCalendarComponent from "./../../calendars/mainCalendarComponent/MainCalendarComponent";
import DoctorPlanningVisits from "./../../doctor/doctorPlanningVisits/DoctorPlanningVisits";

function DoctorPage({
}) {
    const isDoctor = true;
    const [isDoctrOperationVew, setIsDoctrOperationVew] = useState(true);
    const [isDoctorPlanningVisits, setIsDoctorPlanningVisits] = useState(false);
    const [isMainCalendarComponent, setIsMainCalendarComponent] = useState(false);

    function setAllVewsFale() {
        setIsDoctrOperationVew(false);
        setIsMainCalendarComponent(false);
        setIsDoctorPlanningVisits(false);
    }
    return (

        <div>
            <DoctorNavigation
                firstName={"Aleksandra"}
                lastName={"Rabcewicz"}
            />
            {isDoctrOperationVew ? <DoctrOperationVew
                onCalendarVewClick={() => {
                    setAllVewsFale();
                    setIsMainCalendarComponent(true);
                }}
                onDoctorPlanningVisits={() => {
                    setAllVewsFale();
                    setIsDoctorPlanningVisits(true);
                }}
            /> : ""}
            {isDoctorPlanningVisits ? <DoctorPlanningVisits
                onBack={() => {
                    setAllVewsFale();
                    setIsDoctrOperationVew(true);
                }}
            /> : ""}
            {isMainCalendarComponent ? <MainCalendarComponent
                isDoctor={isDoctor}
                onBack={() => {
                    setAllVewsFale();
                    setIsDoctrOperationVew(true);
                }} /> : ""}

        </div>
    );
}

export default DoctorPage;
