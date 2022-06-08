import React, { useEffect, useState } from 'react';
import "./Visit.css";

function Visit(patient) {
   return(
     <div className="visit">
      a {patient.firstName} {patient.lastName} 
     </div>
   )
}

export default Visit;
