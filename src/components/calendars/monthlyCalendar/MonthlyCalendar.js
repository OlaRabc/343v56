import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./MonthlyCalendar.css";
import moment from "moment";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import PopupInformationAboutVisit from "../../popups/popupInformationAboutVisit/PopupInformationAboutVisit";
import PopupAcceptedVisitInformation from "./../../popups/popupAcceptedVisitInformation/PopupAcceptedVisitInformation";
import { getVisitByPatientIdAndVisitDateBetween } from "./../../../apiOperation/getOperaton/GetOperaton";
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
  dateInLastSquare,
  parseToApiDate
} from './../../util/dateHelper';


function MonthlyCalendar({
  isDoctor,
  userId,
  onCalendarVewChange

}) {
  /*tmp obj*/
  const visitObjectPrototype = {
      visitId: null,
      visitStatusId: null,
      visitDate: null,
      visitStart: null,
      visitEnd: null,
      doctor: {
          doctorId: null,
          firstName: null,
          lastName: null,
          pwz: null,
          street: null,
          localNumber: null,
          city: {
              cityId: null,
              name: null
          }
      },
      patient: {
          patientId: null,
          firstName: null,
          lastName: null,
          mail: null,
          phoneNumber: null,
          city: {
              cityId: null,
              name: null
          }
      },
      specialization: {
          specializationId: 1,
          name: null
      }
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

  const [dateInFirstS, setDateInFirstS] = useState(dateInFirstSquare(firstOfMonth(), parseInt(moment(actualDate).format("MM")), parseInt(moment(actualDate).format("YYYY"))));
  const [dateInLastS, setDateInLastS] = useState(dateInLastSquare(firstOfMonth(), parseInt(moment(actualDate).format("MM")), parseInt(moment(actualDate).format("YYYY"))));

  const [visitArray, setVisitArray] = useState([]);
  const [visitToShow, setVisitToShow]= useState(visitObjectPrototype);

  const [isPopupInformationAboutVisit, setIsPopupInformationAboutVisit] = useState(false);
  const [isPopupAcceptedVisitInformation, setIsPopupAcceptedVisitInformation] = useState(false);

  const dayOfWeekArray = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];

  let squares = [];
  function renderSquare(i) {
    let thisMonth, tmpDate = "", tmpVisit = [];
    if (i > howLongM + firstOfM - 1) thisMonth = false;
    else if (i < firstOfM) thisMonth = false;
    else thisMonth = true;

    if (!thisMonth && i < 7) tmpDate = lastYear(month, year) + "-" + viewMonth(lastMonth(month)) + "-" + lastDays(month, year, firstOfM, i)
    if (thisMonth) tmpDate = year + "-" + viewMonth(month) + "-" + addZero(i - firstOfM + 1)
    if (!thisMonth && i > 20) tmpDate = nextYear(month, year) + "-" + viewMonth(nextMonth(month)) + "-" + addZero(nextDays(month, year, firstOfM, i))

    visitArray.map((visit)=>{
      if(visit.visitDate==tmpDate)
      tmpVisit.push(visit)
    })
    let tmpObj = { key: i, date: tmpDate, thisMonth: thisMonth, visitList: tmpVisit }
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
              onClick={async () => {
                let tmpMonth = month;
                let tmpYear = year;

                if (tmpMonth === 1) {
                  tmpMonth = 12;
                  tmpYear = year - 1;
                  setMonth(tmpMonth); setYear(tmpYear);
                } else {
                  tmpMonth = tmpMonth - 1
                  setMonth(tmpMonth);
                }

                sethowLongM(howLongMonth(tmpMonth, tmpYear));
                setFirstDayInNextM(firstOfM);
                setFirstOfM(firstDayInLastM);
                setFirstDayInLastM(firstDayInLastMonth(tmpMonth, tmpYear, firstDayInLastM));
                setDateInFirstS(dateInFirstSquare(firstDayInLastM, tmpMonth, tmpYear));
                setDateInLastS(dateInLastSquare(firstDayInLastM, tmpMonth, tmpYear));

                if (isDoctor === false) {
                  let tmp = await getVisitByPatientIdAndVisitDateBetween(userId, parseToApiDate(dateInFirstSquare(firstDayInLastM, tmpMonth, tmpYear)), parseToApiDate(dateInLastSquare(firstDayInLastM, tmpMonth, tmpYear)))
                  setVisitArray(tmp)
                }
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
                let tmpMonth = month;
                let tmpYear = year;
                if (month === 12) {
                  tmpMonth = 1;
                  tmpYear += 1
                  setMonth(tmpMonth); setYear(tmpYear);
                } else {
                  tmpMonth += 1
                  setMonth(tmpMonth);
                }
                sethowLongM(howLongMonth(tmpMonth, tmpYear));
                setFirstDayInLastM(firstOfM);
                setFirstOfM(firstDayInNextM);
                setFirstDayInNextM(firstDayInNextMonth(tmpMonth, tmpYear, firstDayInNextM));
                setDateInFirstS(dateInFirstSquare(firstDayInNextM, tmpMonth, tmpYear));
                setDateInLastS(dateInLastSquare(firstDayInLastM, tmpMonth, tmpYear));

                if (isDoctor === false) {
                  let tmp = await getVisitByPatientIdAndVisitDateBetween(userId, parseToApiDate(dateInFirstSquare(firstDayInLastM, tmpMonth, tmpYear)), parseToApiDate(dateInLastSquare(firstDayInLastM, tmpMonth, tmpYear)));
                  setVisitArray(tmp)
                }
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
                  !square.thisMonth ?
                    "square not-this-month"
                    : "square "}
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
                    {square.visitList.map((visit)=>{
                      return(
                        <div key={visit.visitId}  
                          className={visit.visitStatusId === 1 ? "visit btn-secondary col-12" :
                              (visit.visitStatusId === 3 ? "visit btn-success col-12" :
                                  (visit.visitStatusId === 2 ? "visit btn-warning col-12"
                                      : "btn btn-danger col-12"))}
                          onDoubleClick={() => { 
                            setIsPopupInformationAboutVisit(true) 
                            setVisitToShow(visit)
                            }}>
                          {visit.specialization.name}
                        </div>
                      )
                    })}
                </Row>
              </div>
            )
          })}
        </Row>
      </Container>
      <PopupInformationAboutVisit
        open={isPopupInformationAboutVisit}
        onClose={() => { setIsPopupInformationAboutVisit(false) }}
        visitInformation={visitToShow}
        onAcceptVisit={() => {
          setIsPopupInformationAboutVisit(false)
          setIsPopupAcceptedVisitInformation(true);
        }}
        isDoctor={isDoctor}
      />
      <PopupAcceptedVisitInformation
        open={isPopupAcceptedVisitInformation}
        onClose={() => { setIsPopupAcceptedVisitInformation(false); }}
      />
    </div>
  )
}

export default MonthlyCalendar;
