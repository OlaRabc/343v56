import './PatientPage.css';
import React, { useEffect, useState } from 'react';
import PatientNavigation from "./../../navigation/patientNavigation/PatientNavigation";
import PatentOperationVew from "./../../patient/patentOperationVew/PatentOperationVew";
import MainCalendarComponent from "./../../patient/calendars/mainCalendarComponent/MainCalendarComponent";
import PatientVisitRejestrationForm from "./../../patient/patientVisitRejestrationForm/PatientVisitRejestrationForm";
import PopupMessageVew from "./../../popups/popupMessageVew/PopupMessageVew";
import { getPatientById, getMessageByPatientId } from "./../../../apiOperation/getOperaton/GetOperaton";
import { useSelector, useDispatch } from 'react-redux';
import { setDoctorId } from './../../../features/counter/counterSlice';
import {patientPrototype} from './../../util/constantObject';
function PatientPage() {
  const isDoctor = false, patientId = 1;

  const doctorId = useSelector((state) => state.doctorId.value);
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [patient, setPatient] = useState(patientPrototype);
  useEffect(() => {
    getMessageByPatientId(patientId)
      .then(data =>
        setMessages(data)
      );
  }, [])
  
  useEffect(() => {
    getPatientById(patientId)
      .then(data =>
        setPatient(data)
      );
  }, [])

  const [isPatentOperationVew, setIsPatentOperationVew] = useState(true);
  const [isMainCalendarComponent, setIsMainCalendarComponent] = useState(false);
  const [isPatientVisitRejestrationForm, setIsPatientVisitRejestrationForm] = useState(false);
  const [isPopupMessageVew, setIsPopupMessageVew] = useState(false);
  const [isPopupMessage, setIsPopupMessage] = useState(false);

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
        messages={messages}
        onMessageClick={()=>{
          setIsPopupMessageVew(true);
        }}
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
            }}
            onBackFromDctorCalendar={() => {
              setAllVewsFale();
              setIsPatientVisitRejestrationForm(true);
              dispatch(setDoctorId(0));
            }} />
          : ""}
        {isPatientVisitRejestrationForm ?
          <PatientVisitRejestrationForm
            userId={patientId}
            onDoctorClick={() => {
              setAllVewsFale()
              setIsMainCalendarComponent(true)
            }}
            onBack={() => {
              setAllVewsFale();
              setIsPatentOperationVew(true);
            }} /> :
          ""}
      </div>
      <PopupMessageVew
       open={isPopupMessageVew}
       onClose={() => { setIsPopupMessageVew(false); }}
       messages={messages}
       />
       <PopupMessageVew
        open={isPopupMessage}
        onClose={() => { setIsPopupMessage(false); }}
        messages={messages}
      />
    </div>
  );
}

export default PatientPage;
