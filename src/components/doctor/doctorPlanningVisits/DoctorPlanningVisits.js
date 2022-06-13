import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./DoctorPlanningVisits.css";
import { AiFillCaretLeft } from "react-icons/ai";
import HarmonogramVisitPlanning from "./../harmonogramVisitPlanning/HarmonogramVisitPlanning";
import OneVisitPlanning from "./../oneVisitPlanning/OneVisitPlanning";

function DoctorPlanningVisits({
   onBack
}) {
   const [oneVisitPlanning, setOneVisitPlanning] = useState(false);
   const [harmonogramVisitPlanning, setHarmonogramVisitPlanning] = useState(false);

   return (
      <Container className="col-12">
         <Row>
            <Col className="col-1 offset-md-1 back" onClick={onBack}>
               <AiFillCaretLeft />
            </Col>
         </Row>
         <Row>
            <Col className="col-12 col-md-5 my-3 " >
               <button type="button" className="btn btn-primary col-12 p-2" onClick={() => {
                  setOneVisitPlanning(true);
                  setHarmonogramVisitPlanning(false);
               }}>
                  Zaplanuj wizytę
               </button>
            </Col>
            <Col className="col-12  col-md-5 my-3 offset-md-2" >
               <button type="button" className="btn btn-primary col-12 p-2" onClick={() => {
                  setOneVisitPlanning(false);
                  setHarmonogramVisitPlanning(true);
               }}>
                  Zaplanuj Harmonogram
               </button>
            </Col>
         </Row>
         {harmonogramVisitPlanning?<HarmonogramVisitPlanning/>:""}
         {oneVisitPlanning?<OneVisitPlanning/>:""}
         
         <Row>
            <Col className="col-12 my-3 " >
               <button type="button" className="btn btn-primary col-12 p-2" onClick={() => {
                  console.log("paln")
               }}>
                  Planuj
               </button>
            </Col>
         </Row>
      </Container>
   )
}

export default DoctorPlanningVisits;
