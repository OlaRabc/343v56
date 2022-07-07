import './DoctorPage.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import DoctorNavigation from "./../../navigation/doctorNavigation/DoctorNavigation";
import DoctrOperationVew from "./../../doctor/doctrOperationVew/DoctrOperationVew"
import MainCalendarComponent from "./../../doctor/calendars/mainCalendarComponent/MainCalendarComponent";
import DoctorPlanningVisits from "./../../doctor/doctorPlanningVisits/DoctorPlanningVisits";
import { getDoctorById } from "./../../../apiOperation/getOperaton/GetOperaton";
function DoctorPage({
}) {
    const isDoctor = true;
    const doctorId = 1;
    /////////////////////////////////////
    const [doctor, setDoctor] = useState(
        {
            doctorId: null,
            firstName: null,
            lastName: null,
            pwz: null,
            street: null,
            localNumber: null,
            cityId: {
                cityId: null,
                name: null
            }
        });

    useEffect(() => {
        getDoctorById(doctorId)
            .then(data =>
                setDoctor(data)
            );
    }, [])

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
                firstName={doctor.firstName}
                lastName={doctor.lastName}
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
                isDoctor={isDoctor}
                doctorId={doctorId}
                onBack={() => {
                    setAllVewsFale();
                    setIsDoctrOperationVew(true);
                }}
            /> : ""}
            {isMainCalendarComponent ? <MainCalendarComponent
                isDoctor={isDoctor}
                userId={doctorId}
                onBack={() => {
                    setAllVewsFale();
                    setIsDoctrOperationVew(true);
                }} /> : ""}

        </div>
    );
}

export default DoctorPage;
