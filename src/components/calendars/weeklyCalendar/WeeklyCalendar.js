import React, { useEffect, useState } from 'react';
import "./WeeklyCalendar.css";
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import moment from "moment";
import {
  whatMonth,
  firstOfWeek,
  howLongMonth,
  addZero
}
from './../../util/dateHelper';


function WeeklyCalendar({
    onCalendarVewChange,
    calendarVew
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
        date=addZero(date-howLongMonth(month,year))+"."+addZero(parseInt(month+1))+"."+year;
      }
      else{
        date=addZero(date)+"."+addZero(month)+"."+year;
      }
      let tmpObj = { key: i,date: date}
      squares.push(tmpObj);
    }
    for (let i = 1; i < 8; i++) {
      renderSquare(i)
    }

   return(
    <Container id="calendar">
      <Row>
        <Col className="col-sm-1">
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
        <Col className="col-sm-2">
          { dateInFirstSquare+"-"+dateInLastSquare+" "+whatMonth(month)+" "+year}
        </Col>
        <Col className="col-sm-1">
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
        <Col className="col-3 col-sm-3 changeCalendarVew" onClick={onCalendarVewChange}>
            {calendarVew?"Miesiąc":"Tydzień"}
        </Col>
        </Row>
        <Row>
        {dayOfWeekArray.map((day) => {
          return (
            <Col key={day} className="col-sm-1"
              style={{
                textAlign: "center",
                width: "14%",
                borderTop: "none",
                borderRight: day === "Niedziela" ? "none"
                  : "1px solid black",
                  color: day === "Niedziela" ? "red"
                  : "",
                  fontWeight: "bold",
              }}
            >
              {day}
            </Col>
          )
        })}
      </Row>
      <Row>
        {squares.map((square)=>{
          return(
            <div key={square.key} className="col-1 weekly-square"
            style={{
              
              borderRight: square.key % 7 === 0 ? "none"
                  : "1px solid black"
            }}>
              {square.date}
            </div>
          )
        })}
      </Row>
    </Container>
   )
}

export default WeeklyCalendar;
