import React, { useEffect, useState } from 'react';
import "./PatientVisitRejestrationForm.css";
import { AiFillCaretLeft} from "react-icons/ai";

function PatientVisitRejestrationForm({
   onBack
}) {

  
   return(
      <div className="col-2 col-md-1 offset-md-1 back" onClick={onBack}> 
         <AiFillCaretLeft/>
      </div>
   )
}

export default PatientVisitRejestrationForm;
