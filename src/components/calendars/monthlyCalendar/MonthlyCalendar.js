import React, { useEffect, useState } from 'react';
import "./MonthlyCalendar.css";
import moment from "moment"
import {AiFillCaretLeft, AiFillCaretRight  } from "react-icons/ai";
import Navigation from "./../navigation/Navigation";
import { firstOfMonth,
  whatMonth,
  howLongMonth,
  lastDays,
  nextDays,
  lastMonth,
  nextMonth,
  lastYear,
  nextYear,
  viewMonth,
  dateInFirstSquare,
  dateInLastSquare,
  firstDayInLastMonth,
  firstDayInNextMonth,
  isEqualsDates,
  yearFromString,
  monthFromString,
  hoursFromString,
  minutesFromString,
  dayFromString } from './../../util/dateHelper';

function MonthlyCalendar() {
  const actualDate =new Date();
  const [month, setMonth]=useState(parseInt(moment(actualDate).format("MM")))
  const [year, setYear]=useState(parseInt(moment(actualDate).format("YYYY")))
  const [firstOfM, setFirstOfM] = useState(firstOfMonth());
  const [firstDayInNextM, setFirstDayInNextM] = useState(firstDayInNextMonth(month,year,firstOfM));
  const [firstDayInLastM, setFirstDayInLastM] = useState(firstDayInLastMonth(month,year,firstOfM));
  const [howLongM, sethowLongM] = useState(howLongMonth(month,year));
  
  let thisMonth;
  let squares = [];
  function renderSquare(i)
  {
    let tmpObj={ key:i }
    squares.push(tmpObj);

  }
  for (let i = 1; i < 43; i++) {
      renderSquare(i)
  }
   return(
     <div>
       <Navigation
       onLeft={
        <button 
        type="button" 
        className="button"
        onClick={()=>{
          if (month === 1) {
            setMonth(12); setYear(year - 1)
          } else {
            setMonth(month - 1);
          }
          sethowLongM(howLongMonth(month - 1, year));
          setFirstDayInNextM(firstOfM)
          setFirstOfM(firstDayInLastM);
          setFirstDayInLastM(firstDayInLastMonth(month-1,year,firstDayInLastM));
        }}>
           <AiFillCaretLeft/> 
        </button>
       }
       date={ whatMonth(month)+" "+year}
       onRight={
        <button 
        type="button" 
        className="button"
         onClick={ async () => {
          if(month===12) {
            setMonth(1); setYear(year+1)
          } else {
            setMonth(month + 1);
          }
          sethowLongM(howLongMonth(month+1,year));
          setFirstDayInLastM(firstOfM);
          setFirstOfM( firstDayInNextM );
          setFirstDayInNextM( firstDayInNextMonth(month+1,year,firstDayInNextM));
        }}>
          <AiFillCaretRight/>
        </button>
       }
       />
       <div id="calendar">
       {squares.map((square)=>{
         return (
           <div key={square.key} className="square">
             {square.key>=firstOfM?thisMonth=true:""}
             <div id={square.key%7===0?'sunday':''}  >
                <div className={!thisMonth?"anotherMonth":""}>
                  { square.key>howLongM+firstOfM-1?thisMonth=false:""}
                  { !thisMonth &&square.key<7?lastDays(month,year,firstOfM,square.key)+"."+viewMonth(lastMonth(month))+"."+lastYear(month,year):""}
                  { thisMonth?(square.key-firstOfM+1)+"."+viewMonth(month)+"."+year :""}
                  { !thisMonth && square.key>20? nextDays(month,year,firstOfM,square.key)+"."+viewMonth(nextMonth(month))+"."+nextYear(month,year) :""}
                </div>
              </div>
           </div>
         )
       })}
       </div>
     </div>
   )
}

export default MonthlyCalendar;
