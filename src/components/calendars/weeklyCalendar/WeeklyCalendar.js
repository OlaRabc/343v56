import React, { useEffect, useState } from 'react';
import "./WeeklyCalendar.css";
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import moment from "moment";
import {
  whatMonth,
  firstOfWeek,
  howLongMonth,
  addZero,
  dayFromString
}
from './../../util/dateHelper';


function WeeklyCalendar({
    onCalendarVewChange
}) {
    const actualDate = new Date();
    const dayOfWeekArray = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
    const [month, setMonth] = useState(parseInt(moment(actualDate).format("MM")));
    const [year, setYear] = useState(parseInt(moment(actualDate).format("YYYY")));
    const [dateInFirstSquare, setDateInFirstSquare] = useState(firstOfWeek());
    const [dateInLastSquare, setDateInLastSquare] = useState(dateInFirstSquare+6);

    let squares = [];
    function renderSquare(i) {
      let date=i-1+dateInFirstSquare;
      if( date>howLongMonth(month,year)){
        date=year+"."+addZero(parseInt(month+1))+"."+addZero(parseInt(date-howLongMonth(month,year)));
      }
      else{
        date=year+"."+addZero(month)+"."+addZero(date);
      }
      let tmpObj = { key: i,date: date}
      squares.push(tmpObj);
    }
    for (let i = 1; i < 8; i++) {
      renderSquare(i);
    }

   return(
    <Container className="py-4 my-3 calendar ">
      <Row className="col-12 my-3">
        <Col className="col-3 col-md-2 col-lg-1 ">
          <button
            type="button"
            className="button"
            onClick={() => {
              let tmpDateInFirstSquare=dateInFirstSquare-7;
              let tmpDateInLastSquare=dateInFirstSquare-1;
              let tmpMonth=month;
              if(tmpDateInFirstSquare<1){
                  if (month === 1) {
                  setMonth(12); tmpMonth=12; setYear(year - 1)
                } else {
                  setMonth(month - 1);tmpMonth-=1;
                }
                tmpDateInFirstSquare=howLongMonth(tmpMonth,year)+tmpDateInFirstSquare;
              }
                setDateInLastSquare(tmpDateInLastSquare);
                setDateInFirstSquare(tmpDateInFirstSquare);
            }}>
            <AiFillCaretLeft />
          </button>
        </Col>
        <Col className="col-7 col-md-8 col-lg-3 p-3 nav-date">
          { dateInFirstSquare+"-"+dateInLastSquare+" "+whatMonth(month)+" "+year}
        </Col>
        <Col className="col-2 col-lg-1">
          <button
            type="button"
            className="button"
            onClick={async () => {
              let tmpDateInFirstSquare=dateInLastSquare+1;
              let tmpDateInLastSquare=dateInLastSquare+7;

              if(tmpDateInFirstSquare>howLongMonth(month,year))
              {
                tmpDateInFirstSquare=tmpDateInFirstSquare-howLongMonth(month,year);
                if (month === 12) {
                  setMonth(1); setYear(year + 1);
                } else {
                  setMonth(month + 1);
                }
              }

              if(tmpDateInLastSquare>howLongMonth(month,year))
              {
                tmpDateInLastSquare=tmpDateInLastSquare-howLongMonth(month,year);
                if (month === 12) {
                  setMonth(1); setYear(year + 1);
                } else {
                  setMonth(month + 1);
                }
                
              }
              setDateInFirstSquare(tmpDateInFirstSquare);
              setDateInLastSquare(tmpDateInLastSquare);
              
            }}>
            <AiFillCaretRight />
          </button>
        </Col>
        <Col className="col-10  col-lg-2  offset-1 offset-lg-5 p-2 my-2 nav-calendar" onClick={onCalendarVewChange}>
            Tydzień
        </Col>
      </Row>
      <Row>
        {dayOfWeekArray.map((day) => {
          return (
            <div key={day} className="weekly-top-square"
              style={{
                borderRight: day === "Nie" ? "none"
                  : "1px solid black",
                  color: day === "Nie" ? "red"
                  : "",
                  
              }}
            >
              {day}
            </div>
          )
        })}
      </Row>
      <Row>
        {squares.map((square)=>{
          return(
            <div key={square.key} className="weekly-square"
            style={{
              color: square.key % 7 === 0  ? "red"
                    : "",
              borderRight: square.key % 7 === 0 ? "none"
                  : "1px solid black"
            }}>
              {dayFromString(square.date)}
            </div>
          )
        })}
      </Row>
    </Container>
   )
}

export default WeeklyCalendar;
