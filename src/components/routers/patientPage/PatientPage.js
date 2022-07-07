import './PatientPage.css';
import PatientNavigation from "./../../navigation/patientNavigation/PatientNavigation";
import PatentOperationVew from "./../../patient/patentOperationVew/PatentOperationVew";
import React, { useEffect, useState } from 'react';
import MainCalendarComponent from "./../../patient/calendars/mainCalendarComponent/MainCalendarComponent";
import PatientVisitRejestrationForm from "./../../patient/patientVisitRejestrationForm/PatientVisitRejestrationForm";
import { getPatientById } from "./../../../apiOperation/getOperaton/GetOperaton";

function PatientPage() {
  const isDoctor = false, patientId = 1;
  /////////////////////////////////////

  const [patient, setPatient] = useState(
    {
      patientId: null,
      firstName: null,
      lastName: null,
      mail: null,
      phoneNumber: null,
      cityId: {
        cityId: null,
        name: null
      }
    });
  useEffect(() => {
    getPatientById(patientId)
      .then(data =>
        setPatient(data)
      );
  }, [])

  const [isPatentOperationVew, setIsPatentOperationVew] = useState(true);
  const [isMainCalendarComponent, setIsMainCalendarComponent] = useState(false);
  const [isPatientVisitRejestrationForm, setIsPatientVisitRejestrationForm] = useState(false);

  function setAllVewsFale() {
    setIsPatentOperationVew(false);
    setIsMainCalendarComponent(false);
    setIsPatientVisitRejestrationForm(false);
  }
  return (
    <div id="patient-conteiner">
      <PatientNavigation
        firstName={patient.firstName}
        lastName={patient.lastName}
      />
      <div id="col-12 patient-body ">
        {isPatentOperationVew ? <PatentOperationVew
          onCalendarVewClick={() => {
            setAllVewsFale();
            setIsMainCalendarComponent(true);

          }}
          onPatientVisitRejestrationFormVew={() => {
            setAllVewsFale();
            setIsPatientVisitRejestrationForm(true);
          }}
        /> : ""}
        {isMainCalendarComponent ?
          <MainCalendarComponent
            userId={patientId}
            isDoctor={isDoctor}
            isPatientVew={true}
            onBack={() => {
              setAllVewsFale();
              setIsPatentOperationVew(true);
            }} />
          : ""}
        {isPatientVisitRejestrationForm ?
          <PatientVisitRejestrationForm
            userId={patientId}
            onDoctorClick={()=>{
              setAllVewsFale()
              setIsMainCalendarComponent(true)
            }}
            onBack={() => {
              setAllVewsFale();
              setIsPatentOperationVew(true);
            }} /> :
          ""}
      </div>
    </div>
  );
}

export default PatientPage;
