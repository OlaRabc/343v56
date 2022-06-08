import './PatientPage.css';
import PatientNavigation from "./../../navigation/patientNavigation/PatientNavigation";
import PatentOperationVew from "./../../patentOperationVew/PatentOperationVew";
import { useState } from 'react';
import MonthlyCalendar from "./../../calendars/monthlyCalendar/MonthlyCalendar"

function PatientPage() {
  const [isPatentOperationVew,setIsPatentOperationVew ]=useState(true);
  const [isMonthlyCalendar,setIsMonthlyCalendar ]=useState(false);

  function setAllVewsFale()
  {
    setIsPatentOperationVew(false);
    setIsMonthlyCalendar(false);
  }
  return (
    <div>
        <PatientNavigation 
          firstName={"firstName"}
          lastName={"lastName"}
        />
        {isPatentOperationVew?<PatentOperationVew 
          onCalendarVewClick={()=>{
            setAllVewsFale();
            setIsMonthlyCalendar(true);
          }}/>:""}
        {isMonthlyCalendar?<MonthlyCalendar/>:""}
        
    </div>
  );
}

export default PatientPage;
