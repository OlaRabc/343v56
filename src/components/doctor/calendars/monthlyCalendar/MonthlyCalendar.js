import "./MonthlyCalendar.css";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
import { whatMonth, helper } from './../../../util/dateHelper';


function MonthlyCalendar({
  isDoctor,
  userId,
  onCalendarVewChange

}) {


  ////////////////////////////////////////////////////////////////////////
  const actualDate = moment(new Date()).format("YYYY-MM-DD d");
  let tmpDay = parseInt(moment(actualDate, "YYYY-MM-DD d").format("DD")) * (-1) + 1;
  let firstOfM = moment(actualDate, "YYYY-MM-DD d").add(tmpDay, 'days').format("YYYY-MM-DD d")
  let tmpDay2 = helper(parseInt(moment(firstOfM, "YYYY-MM-DD d").format("d"))) * (-1);
  let dayInFirstS = moment(firstOfM, "YYYY-MM-DD d").add(tmpDay2, 'days').format("YYYY-MM-DD d");
  let dayInLastS = moment(dayInFirstS, "YYYY-MM-DD d").add(41, 'days').format("YYYY-MM-DD d");

  const [month, setMonth] = useState(parseInt(moment(actualDate, "YYYY-MM-DD d").format("MM")));
  const [year, setYear] = useState(parseInt(moment(actualDate, "YYYY-MM-DD d").format("YYYY")));
  const [firstOfMonth, setFirstOfMonth] = useState(firstOfM);
  const [dateInFirstSquare, setDateInFirstSquare] = useState(dayInFirstS);
  const [dateInLastSquare, setDateInLastSquare] = useState(dayInLastS);


  const [visitArray, setVisitArray] = useState([]);
  const [visitToShow, setVisitToShow] = useState(visitObjectPrototype);
  const [visitToShowSquareId, setVisitToShowSquareId] = useState();
  const [visitList, setVisitList] = useState([]);
  const [dateToVisitDayVew, setDateToVisitDayVew] = useState();


  const [isPopupInformationAboutVisit, setIsPopupInformationAboutVisit] = useState(false);
  const [isPopupDayVew, setIsPopupDayVew] = useState(false);
  const [isPopupAcceptedVisitInformation, setIsPopupAcceptedVisitInformation] = useState(false);
  const [isPopupCancelVisitInformation, setIsPopupCancelVisitInformation] = useState(false);
  const [isPopupRejectVisitInformation, setIsPopupRejectVisitInformation] = useState(false);
  const [isPopupDeletedVisitInformation, setIsPopupDeletedVisitInformation] = useState(false);

  const dayOfWeekArray = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];

  let squares = [];

  useEffect(() => {
    if (isDoctor === true) {
      getVisitByDoctorIdAndVisitDateBetween(userId,
        moment(dateInFirstSquare, "YYYY-MM-DD d").format("YYYY-MM-DD"),
        moment(dateInLastSquare, "YYYY-MM-DD d").format("YYYY-MM-DD"))
        .then(data =>
          setVisitArray(data)
        );
    }
  }, [])

  async function renderSquare(i) {
    let thisMonth = true, tmpVisit = [];
    let tmpDate = moment(dateInFirstSquare, "YYYY-MM-DD d").add((i - 1), 'days').format("YYYY-MM-DD d");
    let tmpMonth = parseInt(moment(tmpDate, "YYYY-MM-DD d").format("MM"));

    if (tmpMonth !== month) thisMonth = false;

    visitArray.map((visit) => {
      if (moment(visit.visitDate, "YYYY-MM-DD d").format("YYYY-MM-DD") == moment(tmpDate, "YYYY-MM-DD d").format("YYYY-MM-DD"))
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
                let tmpDateInLastMonth = moment(firstOfMonth, "YYYY-MM-DD d").add(-1, 'month').format("YYYY-MM-DD d");
                let tmpDay = parseInt(moment(tmpDateInLastMonth, "YYYY-MM-DD d").format("d")) - 1;
                if (tmpDay < 0) tmpDay = 6
                let tmpDateInFirstS = moment(tmpDateInLastMonth, "YYYY-MM-DD d").add(tmpDay * (-1), 'days').format("YYYY-MM-DD d");
                let tmpDateInLastS = moment(tmpDateInFirstS, "YYYY-MM-DD d").add(41, 'days').format("YYYY-MM-DD d");

                setFirstOfMonth(tmpDateInLastMonth)
                setDateInFirstSquare(tmpDateInFirstS);
                setDateInLastSquare(tmpDateInLastS);

                if (month === 1) {
                  setMonth(12);
                  setYear(year - 1);
                }
                else {
                  setMonth(month - 1);
                }

                let tmp = await getVisitByDoctorIdAndVisitDateBetween(userId,
                  moment(tmpDateInFirstS, "YYYY-MM-DD d").format("YYYY-MM-DD"),
                  moment(tmpDateInLastS, "YYYY-MM-DD d").format("YYYY-MM-DD"))
                setVisitArray(tmp)

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
                let tmpDateInNextMonth = moment(firstOfMonth, "YYYY-MM-DD d").add(1, 'month').format("YYYY-MM-DD d");
                let tmpDay = parseInt(moment(tmpDateInNextMonth, "YYYY-MM-DD d").format("d")) - 1;
                if (tmpDay < 0) tmpDay = 6


                setFirstOfMonth(tmpDateInNextMonth)
                if (month === 12) {
                  setMonth(1);
                  setYear(year + 1);
                }
                else {
                  setMonth(month + 1);
                }
                let tmpDateInFirstS = moment(tmpDateInNextMonth, "YYYY-MM-DD d").add(tmpDay * (-1), 'days').format("YYYY-MM-DD d");
                let tmpDateInLastS = moment(tmpDateInFirstS, "YYYY-MM-DD d").add(41, 'days').format("YYYY-MM-DD d");
                setDateInFirstSquare(tmpDateInFirstS);
                setDateInLastSquare(tmpDateInLastS);

                let tmp = await getVisitByDoctorIdAndVisitDateBetween(userId,
                  moment(tmpDateInFirstS, "YYYY-MM-DD d").format("YYYY-MM-DD"),
                  moment(tmpDateInLastS, "YYYY-MM-DD d").format("YYYY-MM-DD"))
                setVisitArray(tmp)
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
                  setIsPopupDayVew(true)
                  setVisitList(square.visitList)
                  setDateToVisitDayVew(square.date)
                }}
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
                  {moment(square.date, "YYYY-MM-DD d").format("DD.MM.YYYY")}
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
                          setIsPopupInformationAboutVisit(true)
                          setVisitToShow(visit)
                          setVisitToShowSquareId(square.key)
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



      <PopupInformationAboutVisit
        open={isPopupInformationAboutVisit}
        onClose={() => { setIsPopupInformationAboutVisit(false) }}
        visit={visitToShow}
        isDoctor={isDoctor}
        onCancelVisit={async () => {/*odwolac*/
          setIsPopupInformationAboutVisit(false);
          setIsPopupCancelVisitInformation(true);

          let tmp = visitArray.map((visit) => {
            if (visit.visitId !== visitToShow.visitId) return visit
            else {
              let tmpVisit = visit;
              tmpVisit.visitStatusId = 4;
              return tmpVisit;
            }
          })

          setVisitArray(tmp)
          await patchVisit(visitToShow.visitId, 4, userId)
        }}
        onAcceptVisit={async () => {
          setIsPopupInformationAboutVisit(false);
          setIsPopupAcceptedVisitInformation(true);

          let tmp = visitArray.map((visit) => {
            if (visit.visitId !== visitToShow.visitId) return visit
            else {
              let tmpVisit = visit;
              tmpVisit.visitStatusId = 3;
              return tmpVisit;
            }
          })

          setVisitArray(tmp)
          await patchVisit(visitToShow.visitId, 3, userId)
        }}
        onRejectVisit={async () => {
          setIsPopupInformationAboutVisit(false);
          setIsPopupRejectVisitInformation(true);

          let tmp = visitArray.map((visit) => {
            if (visit.visitId !== visitToShow.visitId) return visit
            else {
              let tmpVisit = visit;
              tmpVisit.visitStatusId = 1;
              tmpVisit.patient = null;
              return tmpVisit;
            }
          })

          setVisitArray(tmp)
          await patchVisit(visitToShow.visitId, 1, userId)
        }}
        onDeleteVisit={async () => {
          setIsPopupInformationAboutVisit(false);
          setIsPopupDeletedVisitInformation(true);

          let tmp = visitArray.filter((visit) => {
            return visit.visitId !== visitToShow.visitId
          })

          setVisitArray(tmp)
          await patchVisit(visitToShow.visitId, 5, userId)
        }}
      />

      <PopupCancelVisitInformation
        open={isPopupCancelVisitInformation}
        onClose={() => { setIsPopupCancelVisitInformation(false); }}
      />
      <PopupRejectVisitInformation
        open={isPopupRejectVisitInformation}
        onClose={() => { setIsPopupRejectVisitInformation(false); }}
      />
      <PopupAcceptedVisitInformation
        open={isPopupAcceptedVisitInformation}
        onClose={() => { setIsPopupAcceptedVisitInformation(false); }}
      />
      <PopupDeletedVisitInformation
        open={isPopupDeletedVisitInformation}
        onClose={() => { setIsPopupDeletedVisitInformation(false); }}
      />
      <PopupDayVew
        isDoctor={isDoctor}
        userId={userId}
        visitList={visitList}
        dateToVisitDayVew={dateToVisitDayVew}
        open={isPopupDayVew}
        onClose={() => { setIsPopupDayVew(false); }}

        onCancelVisit={async () => {/*odwolac*/
          setIsPopupInformationAboutVisit(false);
          setIsPopupCancelVisitInformation(true);

          let tmp = visitArray.map((visit) => {
            if (visit.visitId !== visitToShow.visitId) return visit
            else {
              let tmpVisit = visit;
              tmpVisit.visitStatusId = 4;
              return tmpVisit;
            }
          })

          setVisitArray(tmp)
          await patchVisit(visitToShow.visitId, 4, userId)
        }}

      />
    </div>
  )
}

export default MonthlyCalendar;
