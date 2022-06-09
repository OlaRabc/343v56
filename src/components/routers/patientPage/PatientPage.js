import './PatientPage.css';
import PatientNavigation from "./../../navigation/patientNavigation/PatientNavigation";
import PatentOperationVew from "./../../patentOperationVew/PatentOperationVew";
import { useState } from 'react';
import MainCalendarComponent from "./../../calendars/mainCalendarComponent/MainCalendarComponent";
import PatientVisitRejestrationForm from "./../../patientVisitRejestrationForm/PatientVisitRejestrationForm";

function PatientPage() {
  const [isPatentOperationVew,setIsPatentOperationVew ]=useState(true);
  const [isMainCalendarComponent,setIsMainCalendarComponent ]=useState(false);
  const [isPatientVisitRejestrationForm,setIsPatientVisitRejestrationForm ]=useState(false);

  function setAllVewsFale()
  {
    setIsPatentOperationVew(false);
    setIsMainCalendarComponent(false);
    setIsPatientVisitRejestrationForm(false);
  }
  return (
    <div id="patient-conteiner">
        <PatientNavigation 
          firstName={"firstName"}
          lastName={"lastName"}
        />
        <div id="patient-body">
          {isPatentOperationVew?<PatentOperationVew 
            onCalendarVewClick={()=>{
              setAllVewsFale();
              setIsMainCalendarComponent(true);
            }}
            onPatientVisitRejestrationFormVew={()=>{
              setAllVewsFale();
              setIsPatientVisitRejestrationForm(true);
            }}
            />:""}
          {isMainCalendarComponent?
          <MainCalendarComponent
            onBack={()=>{
              setAllVewsFale();
              setIsPatentOperationVew(true);
          }}/>
          :""}
          {isPatientVisitRejestrationForm?
          <PatientVisitRejestrationForm
            onBack={()=>{
              setAllVewsFale();
              setIsPatentOperationVew(true);
        }}/>:
          ""}
        </div>
    </div>
  );
}

export default PatientPage;
