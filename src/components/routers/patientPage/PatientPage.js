import './PatientPage.css';
import PatientNavigation from "./../../navigation/patientNavigation/PatientNavigation";
import PatentOperationVew from "./../../patient/patentOperationVew/PatentOperationVew";
import { useState } from 'react';
import MainCalendarComponent from "./../../calendars/mainCalendarComponent/MainCalendarComponent";
import PatientVisitRejestrationForm from "./../../patient/patientVisitRejestrationForm/PatientVisitRejestrationForm";

function PatientPage() {
  const isDoctor = false
  /////////////////////////////////////
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
        firstName={"Aleksandra"}
        lastName={"Rabcewicz"}
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
            isDoctor={isDoctor}
            onBack={() => {
              setAllVewsFale();
              setIsPatentOperationVew(true);
            }} />
          : ""}
        {isPatientVisitRejestrationForm ?
          <PatientVisitRejestrationForm
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
