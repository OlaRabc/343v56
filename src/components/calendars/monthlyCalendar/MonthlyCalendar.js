import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./MonthlyCalendar.css";
import moment from "moment";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Visit from "./../../visit/Visit";
import PopupInformationAboutVisit from "../../popups/popupInformationAboutVisit/PopupInformationAboutVisit";
import {
  firstOfMonth,
  whatMonth,
  howLongMonth,
  lastDays,
  nextDays,
  lastMonth,
  nextMonth,
  lastYear,
  nextYear,
  viewMonth,
  addZero,
  firstDayInLastMonth,
  firstDayInNextMonth,
  dayFromString,
  dateInFirstSquare,
  dateInLastSquare
} from './../../util/dateHelper';


function MonthlyCalendar({
  onCalendarVewChange
}) {
  /*tmp obj*/
       const visitInformation={
        firstName: "Aleksandra",
        lastName:"Rabcewicz",
        timeStart:"10:00",
        timeEnd:"10:30",
        visitTime:"30",
        visitType:"tel",
        mail:"a@wp.pl",
        phoneNumber:"123321122",
        personalID:"11111111111",
        visitStatus:"toAcceptVisit", 
        /*  freeVisit   removeByPatientVisit   acceptedVisit  toAcceptVisit  */
       }

  ////////////////////////////////////////////////////////////////////////
  const actualDate = new Date();
  const [month, setMonth] = useState(parseInt(moment(actualDate).format("MM")))
  const [year, setYear] = useState(parseInt(moment(actualDate).format("YYYY")))
  const [firstOfM, setFirstOfM] = useState(firstOfMonth());
  const [firstDayInNextM, setFirstDayInNextM] = useState(firstDayInNextMonth(month, year, firstOfM));
  const [firstDayInLastM, setFirstDayInLastM] = useState(firstDayInLastMonth(month, year, firstOfM));
  const [howLongM, sethowLongM] = useState(howLongMonth(month, year));

  const [isPopupInformationAboutVisit, setIsPopupInformationAboutVisit] = useState(false);

  const dayOfWeekArray = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];


  let squares = [];
  function renderSquare(i) {
    let thisMonth, tmpDate = "";
    if (i > howLongM + firstOfM - 1) thisMonth = false;
    else if (i < firstOfM) thisMonth = false;
    else thisMonth = true;

    if (!thisMonth && i < 7) tmpDate = lastYear(month, year) + "." + viewMonth(lastMonth(month)) + "." + lastDays(month, year, firstOfM, i)
    if (thisMonth) tmpDate = year + "." + viewMonth(month) + "." + addZero(i - firstOfM + 1)
    if (!thisMonth && i > 20) tmpDate =  nextYear(month, year)+ "." + viewMonth(nextMonth(month)) + "." + addZero(nextDays(month, year, firstOfM, i))

    let tmpObj = { key: i, date: tmpDate, thisMonth:thisMonth }
    squares.push(tmpObj);

  }
  for (let i = 1; i < 43; i++) {
    renderSquare(i);
  }
  return (
    <div>
      <Container className="p-4 my-3 calendar ">
        <Row className="my-3">
          <Col className="col-2 col-lg-1">
            <button
              type="button"
              className="button"
              onClick={() => {
                if (month === 1) {
                  setMonth(12); setYear(year - 1);
                } else {
                  setMonth(month - 1);
                }
                sethowLongM(howLongMonth(month - 1, year));
                setFirstDayInNextM(firstOfM);
                setFirstOfM(firstDayInLastM);
                setFirstDayInLastM(firstDayInLastMonth(month - 1, year, firstDayInLastM));
              }}>
              <AiFillCaretLeft />
            </button>
          </Col>
          <Col className="col-8 col-sm-3 pt-2 pt-md-3 nav-date">
            {whatMonth(month) + " " + year}
          </Col>
          <Col className="col-2 col-lg-1">
            <button
              type="button"
              className="button"
              onClick={async () => {
                if (month === 12) {
                  setMonth(1); setYear(year + 1);
                } else {
                  setMonth(month + 1);
                }
                sethowLongM(howLongMonth(month + 1, year));
                setFirstDayInLastM(firstOfM);
                setFirstOfM(firstDayInNextM);
                setFirstDayInNextM(firstDayInNextMonth(month + 1, year, firstDayInNextM));
              }}>
              <AiFillCaretRight />
            </button>
          </Col>
          <Col className="col-10 col-sm-2 col-lg-2  offset-1 offset-sm-3 offset-lg-5 mt-2 pt-1 pt-sm-2 p-md-2 nav-calendar" onClick={onCalendarVewChange}>
            Miesiąc
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
                  borderRight: day === "Nie" ? "none"
                    : "",
                    color: day === "Nie" ? "red"
                    : "",
                    fontWeight: "bold",
                }}
              >
                {day}
              </Col>
            )
          })}
        </Row>

        <Row >
          {squares.map((square) => {
            return (
              <div key={square.key} 
              className={
                !square.thisMonth?
                  "square not-this-month"
                  :"square "}
                style={{
                  borderRight: square.key % 7 === 0 ? "none"
                    : "",
                }}
              >
                <Row
                  style={{
                      color: square.key % 7 === 0 ? "red"
                      : "",
                  }}
                >
                  {dayFromString(square.date)}
                </Row>
                <Row>
                  <div onDoubleClick={()=>{setIsPopupInformationAboutVisit(true)}}>
                    <Visit />
                  </div>
                </Row>
              </div>
            )
          })}
        </Row>  
      </Container>
      <PopupInformationAboutVisit
       open={isPopupInformationAboutVisit}
       onClose={()=>{setIsPopupInformationAboutVisit(false)}}
       visitInformation={visitInformation}
       onAcceptVisit={()=>{

       }}
      />
    </div>
  )
}

export default MonthlyCalendar;
