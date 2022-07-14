import React, { useEffect, useState } from 'react';
import "./WeeklyCalendar.css";
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import moment from "moment";
import { visitObjectPrototype } from "./../../../util/constantObject";
import PopupInformationAboutVisit from "./../../../popups/popupInformationAboutVisit/PopupInformationAboutVisit";
import PopupAktionInformation from "./../../../popups/popupAktionInformation/PopupAktionInformation";
import { getVisitByPatientIdAndVisitDateBetween, getVisitByDoctorIdAndVisitDateBetweenAndVisitStatusAndSpecializationId, getDoctorById } from "./../../../../apiOperation/getOperaton/GetOperaton";
import { patchVisit } from "./../../../../apiOperation/patchOperation/PatchOperaton";
import { useSelector, useDispatch } from 'react-redux';
import PopupBookedVisitInformation from "./../../../popups/popupBookedVisitInformation/PopupBookedVisitInformation";

function WeeklyCalendar({
  onCalendarVewChange,
  isDoctor,
  userId,
  isPatientVew
}) {
  const d = useSelector((state) => state.doctorId.value)
  console.log(d)
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
  const [doctor, setDoctor] = useState({});
  const [message, setMessage]=useState("");

  const [visitArray, setVisitArray] = useState([]);

  let squares = [];

  useEffect(() => {
    if (d !== 0)
      getDoctorById(d.doctor.doctorId).then(data =>
        setDoctor(data)
      );
  }, [])

  useEffect(() => {
    if (d === 0) {
      getVisitByPatientIdAndVisitDateBetween(userId,
        moment(dateInFirstSquare).format("YYYY-MM-DD"),
        moment(dateInLastSquare).format("YYYY-MM-DD")).then(data =>
          setVisitArray(data)
        );
    }
    else {
      getVisitByDoctorIdAndVisitDateBetweenAndVisitStatusAndSpecializationId(d.doctor.doctorId,
        moment(dateInFirstSquare).format("YYYY-MM-DD"),
        moment(dateInLastSquare).format("YYYY-MM-DD"),
        1,
        d.specialization.specializationId).then(data =>
          setVisitArray(data)
        );
    }
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

              let tmpVisit
              if (isDoctor === false && isPatientVew === true && d === 0) {
                tmpVisit = await getVisitByPatientIdAndVisitDateBetween(userId, moment(dateInF).format("YYYY-MM-DD"), moment(dateInL).format("YYYY-MM-DD"))

              }
              else {
                tmpVisit = await getVisitByDoctorIdAndVisitDateBetweenAndVisitStatusAndSpecializationId(
                  d.doctor.doctorId,
                  moment(dateInF).format("YYYY-MM-DD"),
                  moment(dateInL).format("YYYY-MM-DD"),
                  1,
                  d.specialization.specializationId)
              }
              setVisitArray(tmpVisit)
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

              let tmpVisit
              if (isDoctor === false && isPatientVew === true && d === 0) {
                tmpVisit = await getVisitByPatientIdAndVisitDateBetween(
                  userId,
                  moment(dateInF).format("YYYY-MM-DD"),
                  moment(dateInL).format("YYYY-MM-DD"))

              }
              else {
                tmpVisit = await getVisitByDoctorIdAndVisitDateBetweenAndVisitStatusAndSpecializationId(
                  d.doctor.doctorId,
                  moment(dateInF).format("YYYY-MM-DD"),
                  moment(dateInL).format("YYYY-MM-DD"),
                  1,
                  d.specialization.specializationId)
              }
              setVisitArray(tmpVisit)
            }}>
            <AiFillCaretRight />
          </button>
        </Col>
        {d === 0 ?
          <Col className="col-10 col-sm-2 col-lg-2  offset-1 offset-sm-3 offset-lg-5 mt-2 pt-1 pt-sm-2 p-md-2 nav-calendar" onClick={onCalendarVewChange}>
            Tydzień
          </Col>
          : <>
            <Col className="col-12  col-lg-2   mt-2 pt-1 pt-sm-2 p-md-2 nav-calendar no-cursor">
              {doctor.firstName + " " + doctor.lastName}
            </Col>
            <Col className="col-12  col-lg-2  offset-lg-2 mt-2 pt-1 pt-sm-2 p-md-2 nav-calendar" onClick={onCalendarVewChange}>
              Tydzień
            </Col>
          </>}
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
          setMessage("Wizyta odwołana");

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
        onBookVisit={async () => {
          setIsPopupInformationAboutVisit(false);
          setIsPopupAktionInformation(true);
          setMessage("Wizyta zarezerwowana");

          let tmp = visitArray.map((visit) => {
            if (visit.visitId !== visitToShow.visitId) return visit
            else {
              let tmpVisit = visit;
              tmpVisit.visitStatusId = 2;
              return tmpVisit;
            }
          })

          setVisitArray(tmp)
          await patchVisit(visitToShow.visitId, 2, userId)
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
