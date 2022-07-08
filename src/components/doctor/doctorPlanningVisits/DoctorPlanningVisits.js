import "./DoctorPlanningVisits.css";
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillCaretLeft } from "react-icons/ai";
import ScheduleVisitPlanning from "./../scheduleVisitPlanning/ScheduleVisitPlanning";
import OneVisitPlanning from "./../oneVisitPlanning/OneVisitPlanning";

function DoctorPlanningVisits({
   isDoctor,
   doctorId,
   onBack
}) {
   const [oneVisitPlanning, setOneVisitPlanning] = useState(false);
   const [scheduleVisitPlanning, setScheduleVisitPlanning] = useState(false);

   return (
      <Container className="col-12">
         <Row>
            <Col className="col-1 offset-md-1 back" onClick={onBack}>
               <AiFillCaretLeft />
            </Col>
         </Row>
         <Row>
            <Col className="col-12 col-md-5 my-3 " >
               <button
                  type="button"
                  className="btn btn-primary col-12 p-2"
                  nClick={() => {
                     setOneVisitPlanning(true);
                     setScheduleVisitPlanning(false);
                  }}>
                  Zaplanuj wizytę
               </button>
            </Col>
            <Col className="col-12  col-md-5 my-3 offset-md-2" >
               <button
                  type="button"
                  className="btn btn-primary col-12 p-2"
                  onClick={() => {
                     setOneVisitPlanning(false);
                     setScheduleVisitPlanning(true);
                  }}>
                  Zaplanuj Harmonogram
               </button>
            </Col>
         </Row>
         
         {scheduleVisitPlanning ?
            <ScheduleVisitPlanning
               isDoctor={isDoctor}
               doctorId={doctorId}
            />
            : ""}
         {oneVisitPlanning ?
            <OneVisitPlanning
               isDoctor={isDoctor}
               doctorId={doctorId}
            />
            : ""}
      </Container>
   )
}

export default DoctorPlanningVisits;
