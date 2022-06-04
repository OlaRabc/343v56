import React, { useEffect, useState } from 'react';
import "./Navigation.css";


function Navigation({
  onLeft,
  date,
  onRight

}) {

  
   return(
    <nav> 
      {onLeft}
      {date}
      {onRight}
    </nav>
   )
}

export default Navigation;
