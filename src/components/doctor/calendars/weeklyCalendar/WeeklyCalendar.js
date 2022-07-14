import React, { useEffect, useState } from 'react';
import "./WeeklyCalendar.css";
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import moment from "moment";
import {visitObjectPrototype} from "./../../../util/constantObject";
import PopupInformationAboutVisit from "./../../../popups/popupInformationAboutVisit/PopupInformationAboutVisit";
import PopupAktionInformation from "./../../../popups/popupAktionInformation/PopupAktionInformation";
import { getVisitByDoctorIdAndVisitDateBetween } from "./../../../../apiOperation/getOperaton/GetOperaton";
import { patchVisit } from "./../../../../apiOperation/patchOperation/PatchOperaton";



function WeeklyCalendar({
  onCalendarVewChange,
  isDoctor,
  userId
}) {
  let actualDate = new Date(), tmp = new Date(), dateInL = new Date()

  let day = actualDate.getDay();
  if (day === 0) day = 7;

  tmp.setDate(tmp.getDate() - day + 1);
  dateInL.setDate(tmp.getDate() + 7);

  const dayOfWeekArray = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
  const [dateInFirstSquare, setDateInFirstSquare] = useState(tmp);
  const [dateInLastSquare, setDateInLastSquare] = useState(dateInL);


  const [isPopupInformationAboutVisit, setIsPopupInformationAboutVisit] = useState(false);
  const [isPopupAktionInformation, setIsPopupAktionInformation] = useState(false);

  const [visitToShow, setVisitToShow] = useState(visitObjectPrototype);
  const [visitToShowSquareId, setVisitToShowSquareId] = useState();
  const [message, setMessage]=useState("");

  const [visitArray, setVisitArray] = useState([]);

  let squares = [];
  useEffect(() => {
    getVisitByDoctorIdAndVisitDateBetween(userId,
      moment(dateInFirstSquare).format("YYYY-MM-DD"),
      moment(dateInLastSquare).format("YYYY-MM-DD")).then(data =>
        setVisitArray(data)
      );
  }, [])

  function renderSquare(i) {
    let tmp = new Date(dateInFirstSquare);
    tmp.setDate(dateInFirstSquare.getDate() + i - 1);

    let date = moment(tmp).format("YYYY-MM-DD");

    let tmpVisit = [];
    visitArray.map((visit) => {
      if (visit.visitDate == date) {
        tmpVisit.push(visit)
      }
    })

    let tmpObj = { key: i, date: date, visitList: tmpVisit }
    squares.push(tmpObj);
  }
  for (let i = 1; i < 8; i++) {
    renderSquare(i);
  }

  return (
    <Container className="py-4 my-3 calendar ">
      <Row className="col-12 my-3">
        <Col className="col-3 col-md-2 col-lg-1 ">
          <button
            type="button"
            className="button"
            onClick={async () => {

              let dateInF = new Date(dateInFirstSquare), dateInL = new Date(dateInLastSquare);
              dateInF.setDate(dateInF.getDate() - 7);
              dateInL.setDate(dateInL.getDate() - 7);

              setDateInFirstSquare(dateInF)
              setDateInLastSquare(dateInL)
             
              if (isDoctor === true) {
                let tmpVisit = await getVisitByDoctorIdAndVisitDateBetween(userId, moment(dateInF).format("YYYY-MM-DD"), moment(dateInL).format("YYYY-MM-DD"))
                setVisitArray(tmpVisit)
                console.log(tmpVisit)
              }
            }}>
            <AiFillCaretLeft />
          </button>
        </Col>
        <Col className="col-7 col-md-8 col-lg-3 p-3 nav-date">
          {moment(dateInFirstSquare).format("DD.MM.YYYY")}-{moment(dateInLastSquare).format("DD.MM.YYYY")}
        </Col>
        <Col className="col-2 col-lg-1">
          <button
            type="button"
            className="button"
            onClick={async () => {
              let dateInF = new Date(dateInFirstSquare), dateInL = new Date(dateInLastSquare);
              dateInF.setDate(dateInF.getDate() + 7);
              dateInL.setDate(dateInL.getDate() + 7);

              setDateInFirstSquare(dateInF)
              setDateInLastSquare(dateInL)

              if (isDoctor === true) {
                let tmpVisit = await getVisitByDoctorIdAndVisitDateBetween(userId, moment(dateInF).format("YYYY-MM-DD"), moment(dateInL).format("YYYY-MM-DD"))
                setVisitArray(tmpVisit)
              }
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
        {squares.map((square) => {
          return (
            <div key={square.key} className="weekly-square"
              style={{
                color: square.key % 7 === 0 ? "red"
                  : "",
                borderRight: square.key % 7 === 0 ? "none"
                  : "1px solid black"
              }}>
              {moment(square.date).format("DD.MM")}
              <div>
                {square.visitList.map((visit) => {
                  return (
                    <div
                      key={visit.visitId}
                      className={visit.visitStatusId === 1 ? "btn btn-secondary col-11 m-1 " :
                        (visit.visitStatusId === 3 ? "btn btn-success col-11  m-1" :
                          (visit.visitStatusId === 2 ? "btn btn-warning col-11  m-1"
                            : "btn btn-danger col-11  m-1"))}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPopupInformationAboutVisit(true)
                        setVisitToShow(visit)
                        setVisitToShowSquareId(square.key)
                      }}>
                      {visit.specialization.shortName}
                    </div>)
                }
                )}
              </div>
            </div>
          )
        })}
      </Row>
      <PopupInformationAboutVisit
        open={isPopupInformationAboutVisit}
        onClose={() => { setIsPopupInformationAboutVisit(false) }}
        visit={visitToShow}
        isDoctor={isDoctor}
        onCancelVisit={async () => {
          setIsPopupInformationAboutVisit(false);
          setIsPopupAktionInformation(true);
          setMessage("Wizyta odwołana")

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
          setIsPopupAktionInformation(true);
          setMessage("Wizyta zaakceptowana");

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
          setIsPopupAktionInformation(true);
          setMessage("Wizyta odwołana");

          let tmp = visitArray.map((visit) => {
            if (visit.visitId !== visitToShow.visitId) return visit
            else {
              let tmpVisit = visit;
              tmpVisit.visitStatusId = 1;
              tmpVisit.patient=null;
              return tmpVisit;
            }
          })

          setVisitArray(tmp)
          await patchVisit(visitToShow.visitId, 1, userId)
        }}
        onDeleteVisit={async () => {
          setIsPopupInformationAboutVisit(false);
          setIsPopupAktionInformation(true);
          setMessage("Wizyta usunięta");

          let tmp = visitArray.filter((visit) => {
            return visit.visitId !== visitToShow.visitId
          })

          setVisitArray(tmp)
          await patchVisit(visitToShow.visitId, 5, userId)
        }}
      />
      <PopupAktionInformation
        open={isPopupAktionInformation}
        onClose={() => { setIsPopupAktionInformation(false); }}
        message={message}
      />
    </Container>
  )
}

export default WeeklyCalendar;
