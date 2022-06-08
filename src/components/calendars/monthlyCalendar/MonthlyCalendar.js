import React, {useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./MonthlyCalendar.css";
import moment from "moment"
import {AiFillCaretLeft, AiFillCaretRight  } from "react-icons/ai";
import Visit from "./../../visit/Visit"
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
  dayFromString } from './../../util/dateHelper';
  

function MonthlyCalendar() {
  const actualDate =new Date();
  const [month, setMonth]=useState(parseInt(moment(actualDate).format("MM")))
  const [year, setYear]=useState(parseInt(moment(actualDate).format("YYYY")))
  const [firstOfM, setFirstOfM] = useState(firstOfMonth());
  const [firstDayInNextM, setFirstDayInNextM] = useState(firstDayInNextMonth(month,year,firstOfM));
  const [firstDayInLastM, setFirstDayInLastM] = useState(firstDayInLastMonth(month,year,firstOfM));
  const [howLongM, sethowLongM] = useState(howLongMonth(month,year));
  const dayOfWeekArray=["Poniedziełek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]
  
 
  let squares = [];
  function renderSquare(i)
  {
    let thisMonth, tmpDate="";
    if(i>howLongM+firstOfM-1)  thisMonth=false;
    else if(i<firstOfM)  thisMonth=false;
     else thisMonth=true;
     if(!thisMonth && i<7) tmpDate=lastDays(month,year,firstOfM,i)+"."+viewMonth(lastMonth(month))+"."+lastYear(month,year)
     if(thisMonth)   tmpDate=(i-firstOfM+1)+"."+viewMonth(month)+"."+year
     if(!thisMonth && i>20) tmpDate=nextDays(month,year,firstOfM,i)+"."+viewMonth(nextMonth(month))+"."+nextYear(month,year)
                


    let tmpObj={ key:i, date: tmpDate}
    squares.push(tmpObj);

  }
  for (let i = 1; i < 43; i++) {
      renderSquare(i)
  }
   return(
    <Container id="calendar"> 
      <Row>
        <Col className="col-sm-1">
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
        </Col>
        <Col className="col-sm-2">
          { whatMonth(month)+" "+year}
        </Col>
        <Col className="col-sm-1">
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
        </Col>
        <Col className="col-sm-2">
          Miesiąc
        </Col>
      </Row>
      <Row>
        {dayOfWeekArray.map((day)=>{
          return(
            <Col key={day} className="col-sm-1"
                style={{ 
                  textAlign: "center",
                  width: "14%",
                  borderTop: "none",
                  borderRight: day==="Niedziela"? "none"
                    : "",
                }}
                >
                  {day}
        </Col>
          )
        })} 
      </Row>

       <Row>
        {squares.map((square)=>{
          return (
              <Col key={square.key}  className="col-sm-1 square "
              style={{ 
                borderRight: square.key%7===0? "none"
                  : "",
              }}
              >
                <Row>
                  { square.date }
                </Row>
                <Row>
                  <Visit/>
                </Row>
              </Col>
          )
        })}
       </Row>
    </Container>
   )
}

export default MonthlyCalendar;
