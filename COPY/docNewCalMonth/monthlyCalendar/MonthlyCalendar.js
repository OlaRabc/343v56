import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./MonthlyCalendar.css";
import moment from "moment";
import { visitObjectPrototype } from "./../../../util/constantObject";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import PopupInformationAboutVisit from "./../../../popups/popupInformationAboutVisit/PopupInformationAboutVisit";
import PopupAcceptedVisitInformation from "./../../../popups/popupAcceptedVisitInformation/PopupAcceptedVisitInformation";
import PopupCancelVisitInformation from "./../../../popups/popupCancelVisitInformation/PopupCancelVisitInformation";
import PopupRejectVisitInformation from "./../../../popups/popupRejectVisitInformation/PopupRejectVisitInformation";
import PopupDeletedVisitInformation from "./../../../popups/popupDeletedVisitInformation/PopupDeletedVisitInformation";
import PopupDayVew from "./../../../popups/popupDayVew/PopupDayVew";
import { getVisitByDoctorIdAndVisitDateBetween } from "./../../../../apiOperation/getOperaton/GetOperaton";
import { patchVisit } from "./../../../../apiOperation/patchOperation/PatchOperaton";
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
} from './../../../util/dateHelper';


function helper(day) {
  day = day - 1;
  if (day < 0) return 6;
  return day;
}

function MonthlyCalendar({
  isDoctor,
  userId,
  onCalendarVewChange

}) {

  let actualDate = new Date();
  actualDate = moment(actualDate).format("YYYY-MM-DD d");
  let tmpDay = parseInt(moment(actualDate, "YYYY-MM-DD d").format("DD")) * 1440 * (-1);
  tmpDay = tmpDay + 1440;
  let tmpFirstDataInMonth = moment(actualDate, "YYYY-MM-DD d").add(tmpDay, 'm').format("YYYY-MM-DD d");
  let tmpDayInFirstSquare = parseInt(moment(tmpFirstDataInMonth, "YYYY-MM-DD d").format("d"));
  tmpDayInFirstSquare = helper(tmpDayInFirstSquare)
  tmpDayInFirstSquare = tmpDayInFirstSquare * 1440 * (-1);
  let dayInFirstSquare = moment(tmpFirstDataInMonth, "YYYY-MM-DD d").add(tmpDayInFirstSquare, 'm').format("YYYY-MM-DD d");
  let dayInLastSquare = moment(dayInFirstSquare, "YYYY-MM-DD d").add(59040, 'm').format("YYYY-MM-DD d");

  const [dateInFirstSquare, setDateInFirstSquare] = useState(dayInFirstSquare);
  const [dateInLastSquare, setDateInLastSquare] = useState(dayInLastSquare);
  const [month, setMonth] = useState(parseInt(moment(actualDate, "YYYY-MM-DD d").format("MM")));

  const [visitArray, setVisitArray] = useState([]);
  const [visitToShow, setVisitToShow] = useState(visitObjectPrototype);
  const [visitToShowSquareId, setVisitToShowSquareId] = useState();
  const [visitList, setVisitList] = useState([]);
  const [dateToVisitDayVew, setDateToVisitDayVew] = useState();

  useEffect(() => {
    if (isDoctor === true) {
      getVisitByDoctorIdAndVisitDateBetween(userId, moment(dayInFirstSquare, "YYYY-MM-DD d").format("YYYY-MM-DD"), moment(dayInLastSquare, "YYYY-MM-DD d").format("YYYY-MM-DD"))
        .then(data =>
          setVisitArray(data)
        );
    }
  }, [])



  const dayOfWeekArray = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
  let squares = [];

  async function renderSquare(i) {
    let toAdd = (i - 1) * 1440;
    let dateInFirstS = dateInFirstSquare;
    let tmpDate = moment(dateInFirstS, "YYYY-MM-DD d").add(toAdd, 'm').format("YYYY-MM-DD d");
    let tmpThisMonth = parseInt(moment(tmpDate, "YYYY-MM-DD d").format("MM"));
    let tmpIsThisMonth = true;
    if (tmpThisMonth !== month) tmpIsThisMonth = false;

    let tmpVisit = [];
    console.log(visitArray)
    visitArray.map((visit) => {
      let visitDate = moment(visit.visitDate, "YYYY-MM-DD").format("YYYY-MM-DD")
      let tmp = moment(tmpDate, "YYYY-MM-DD").format("YYYY-MM-DD")
      if (visitDate == tmp)
        tmpVisit.push(visit)
    })
    console.log(tmpVisit)
    let tmpObj = { key: i, date: tmpDate, thisMonth: tmpIsThisMonth, visitList: tmpVisit }
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
                console.log("lewo")
              }}>
              <AiFillCaretLeft />
            </button>
          </Col>
          <Col className="col-8 col-sm-3 pt-2 pt-md-3 nav-date">
            {whatMonth(month)}
          </Col>
          <Col className="col-2 col-lg-1">
            <button
              type="button"
              className="button"
              onClick={async () => {
                //dodac how long month + roznica z poczatku kalendarza
                let tmpFirstInNext=moment(dateInFirstSquare, "YYYY-MM-DD d").add(59040, 'm').format("YYYY-MM-DD d");
                //let tmpLastInNext=moment(dateInLastSquare, "YYYY-MM-DD d").add(59040, 'm').format("YYYY-MM-DD d");
                // tmpFirstInNext+4
                console.log(tmpFirstInNext)
                //console.log(tmpLastInNext)
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
                onDoubleClick={() => {
                  console.log("tak")
                }}
                className={
                  !square.thisMonth ?
                    "square not-this-month"
                    : "square "}
                style={{
                  borderRight: square.key % 7 === 0 ? "none"
                    : "",
                }}>
                <Row
                  style={{
                    color: square.key % 7 === 0 ? "red"
                      : "",
                  }}>
                  {moment(square.date, "YYYY-MM-DD d").format("DD")}
                </Row>
                <Row className="">
                  {square.visitList.map((visit) => {
                    return (
                      <Col key={visit.visitId}
                        className={visit.visitStatusId === 1 ? " btn-secondary col-11 m-1 visit" :
                          (visit.visitStatusId === 3 ? "visit btn-success col-11  m-1 visit" :
                            (visit.visitStatusId === 2 ? "visit btn-warning col-11  m-1 visit"
                              : "visit  btn-danger col-11  m-1 visit"))}
                        onDoubleClick={(e) => {
                          e.stopPropagation();
                          console.log("tak")
                        }}>
                        {visit.specialization.shortName}
                      </Col>
                    )
                  })}
                </Row>
              </div>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default MonthlyCalendar;