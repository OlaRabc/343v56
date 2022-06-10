import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./PatientVisitRejestrationForm.css";
import { AiFillCaretLeft} from "react-icons/ai";

function PatientVisitRejestrationForm({
   onBack
}) {

  
   return(
      <div className="col-12">
         <div className="col-1 offset-md-1 back" onClick={onBack}> 
            <AiFillCaretLeft/>
         </div>
         <form className="col-12 offset-lg-3">
            <div className="mx-3">
               Znajdź Doktora:
            </div>
            <div className="col-12 col-lg-6 mt-2 form-group">
               <label for="exampleInputCity" className="mx-2">Miasto:</label>
               <input type="city" className="form-control" id="exampleInputCity" aria-describedby="cityHelp" placeholder="Miasto"/>
            </div>
            <div className="col-12 col-lg-6 mt-2 form-group">
               <label for="exampleInputSpecjalization" className="mx-2" >Specjalizacja:</label>
               <input type="specjalization" className="form-control" id="exampleInputSpecjalization" aria-describedby="specjalizationHelp" placeholder="Specjalizacja"/>
            </div>
            <button type="button" className="btn bg-primary text-light col-12 col-lg-4 mt-4 offset-lg-1" onClick={()=>{
               console.log("szuk")
            }}>
               Szukaj
            </button>
         </form>
      </div>
   )
}

export default PatientVisitRejestrationForm;
