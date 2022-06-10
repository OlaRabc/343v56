import React, { useEffect, useState } from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import "./DoctorPlanningVisits.css";
import { AiFillCaretLeft} from "react-icons/ai";

function DoctorPlanningVisits({
   onBack
}) {

  
   return(
      <div className="col-12">
         <div className="col-1 offset-md-1 back" onClick={onBack}> 
            <AiFillCaretLeft/>
         </div>
            <button type="button" className="btn bg-primary text-light col-12 col-lg-4 mt-4 offset-lg-1" onClick={()=>{
               console.log("szuk")
            }}>
               Szukaj
            </button>
      </div>
   )
}

export default DoctorPlanningVisits;
