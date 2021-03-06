import "./MonthlyCalendar.css";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from "moment";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import PopupInformationAboutVisit from "./../../../popups/popupInformationAboutVisit/PopupInformationAboutVisit";
import PopupAktionInformation from "./../../../popups/popupAktionInformation/PopupAktionInformation";
import { getVisitByPatientIdAndVisitDateBetween, getVisitByDoctorIdAndVisitDateBetweenAndVisitStatusAndSpecializationId, getDoctorById } from "./../../../../apiOperation/getOperaton/GetOperaton";
import { patchVisit } from "./../../../../apiOperation/patchOperation/PatchOperaton";
import { useSelector, useDispatch } from 'react-redux';
import { whatMonth, helper } from './../../../util/dateHelper';

function MonthlyCalendar({
  isDoctor,
  isPatientVew,
  userId,
  onCalendarVewChange

}) {
  const d = useSelector((state) => state.doctorId.value);
  const dispatch = useDispatch();

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
  const [visitToShow, setVisitToShow] = useState({});
  const [visitList, setVisitList] = useState([]);
  const [dateToVisitDayVew, setDateToVisitDayVew] = useState();
  const [doctor, setDoctor] = useState({});
  const [message, setMessage]=useState("");

  const [isPopupInformationAboutVisit, setIsPopupInformationAboutVisit] = useState(false);
  const [isPopupAktionInformation, setIsPopupAktionInformation] = useState(false);

  const dayOfWeekArray = ["Pon", "Wto", "??ro", "Czw", "Pi??", "Sob", "Nie"];
  let squares = [];

  useEffect(() => {
    if (d !== 0)
      getDoctorById(d.doctor.doctorId).then(data =>
        setDoctor(data)
      );
  }, [])

  useEffect(() => {
    if (isDoctor === false && isPatientVew === true && d === 0) {
      getVisitByPatientIdAndVisitDateBetween(userId,
        moment(dateInFirstSquare, "YYYY-MM-DD d").format("YYYY-MM-DD"),
        moment(dateInLastSquare, "YYYY-MM-DD d").format("YYYY-MM-DD")).then(data => {
          setVisitArray(data)
        }
        );
    }
    else {
      getVisitByDoctorIdAndVisitDateBetweenAndVisitStatusAndSpecializationId(d.doctor.doctorId, moment(dateInFirstSquare, "YYYY-MM-DD d").format("YYYY-MM-DD"),
        moment(dateInLastSquare, "YYYY-MM-DD d").format("YYYY-MM-DD"), 1, d.specialization.specializationId).then(data => {
          setVisitArray(data)
        }
        );
    }
  }, [])

  async function renderSquare(i) {
    let thisMonth = true;
    let tmpDate = moment(dateInFirstSquare, "YYYY-MM-DD d").add((i - 1), 'days').format("YYYY-MM-DD d");
    let tmpMonth = parseInt(moment(tmpDate, "YYYY-MM-DD d").format("MM"));

    if (tmpMonth !== month) thisMonth = false;

    let tmpVisit = visitArray.filter((visit) => {
      if (moment(visit.visitDate, "YYYY-MM-DD d").format("YYYY-MM-DD") == moment(tmpDate, "YYYY-MM-DD d").format("YYYY-MM-DD"))
        return(visit)
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

                if (d === 0) {
                  let tmp = await getVisitByPatientIdAndVisitDateBetween(userId,
                    moment(tmpDateInFirstS, "YYYY-MM-DD d").format("YYYY-MM-DD"),
                    moment(tmpDateInLastS, "YYYY-MM-DD d").format("YYYY-MM-DD"))
                  setVisitArray(tmp)
                }
                else {
                  let tmp = await getVisitByDoctorIdAndVisitDateBetweenAndVisitStatusAndSpecializationId(d.doctor.doctorId,
                    moment(tmpDateInFirstS, "YYYY-MM-DD d").format("YYYY-MM-DD"),
                    moment(tmpDateInLastS, "YYYY-MM-DD d").format("YYYY-MM-DD"),
                    1, d.specialization.specializationId)
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

                if (d === 0) {
                  let tmp = await getVisitByPatientIdAndVisitDateBetween(userId,
                    moment(tmpDateInFirstS, "YYYY-MM-DD d").format("YYYY-MM-DD"),
                    moment(tmpDateInLastS, "YYYY-MM-DD d").format("YYYY-MM-DD"))
                  setVisitArray(tmp)
                }
                else {
                  let tmp = await getVisitByDoctorIdAndVisitDateBetweenAndVisitStatusAndSpecializationId(d.doctor.doctorId,
                    moment(tmpDateInFirstS, "YYYY-MM-DD d").format("YYYY-MM-DD"),
                    moment(tmpDateInLastS, "YYYY-MM-DD d").format("YYYY-MM-DD"),
                    1, d.specialization.specializationId)
                  setVisitArray(tmp)
                }
              }}>
              <AiFillCaretRight />
            </button>
          </Col>
          {d === 0 ?
            <Col
              className="col-10 col-sm-2 col-lg-2  offset-1 offset-sm-3 offset-lg-5 mt-2 pt-1 pt-sm-2 p-md-2 nav-calendar"
              onClick={onCalendarVewChange}
            >
              Miesi??c
            </Col>
            : <>
              <Col
                className="col-12 col-md-2 col-lg-2   mt-2 pt-1 pt-sm-2 p-md-2 nav-calendar no-cursor">
                {doctor.firstName + " " + doctor.lastName}
              </Col>
              <Col
                className="col-12 col-md-2 col-lg-2 offset-md-1 offset-lg-2 mt-2 pt-1 pt-sm-2 p-md-2 nav-calendar"
                onClick={onCalendarVewChange}
              >
                Miesi??c
              </Col>
            </>}

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
                  {moment(square.date, "YYYY-MM-DD d").format("DD")}
                </Row>
                <Row className="">
                  {square.visitList.length > 2 ?
                    <>
                      {square.visitList.map((visit, index) => {
                        return (
                          index < 2 ?
                            <Col key={visit.visitId}
                              className={visit.visitStatusId === 1 ? " btn-secondary col-11 m-1 visit" :
                                (visit.visitStatusId === 3 ? "visit btn-success col-11  m-1 visit" :
                                  (visit.visitStatusId === 2 ? "visit btn-warning col-11  m-1 visit"
                                    : "visit  btn-danger col-11  m-1 visit"))}
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsPopupInformationAboutVisit(true)
                                setVisitToShow(visit)
                              }}>
                              {visit.specialization.shortName}
                            </Col>
                            : ""
                        )
                      })}
                      <Col className="visit btn-primary col-11 m-1 visit">
                        +{square.visitList.length - 2}
                      </Col>
                    </>
                    : square.visitList.map((visit) => {
                      return (
                        <Col key={visit.visitId}
                          className={visit.visitStatusId === 1 ? " btn-secondary col-11 m-1 visit" :
                            (visit.visitStatusId === 3 ? "visit btn-success col-11  m-1 visit" :
                              (visit.visitStatusId === 2 ? "visit btn-warning col-11  m-1 visit"
                                : "visit  btn-danger col-11  m-1 visit"))}
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsPopupInformationAboutVisit(true)
                            setVisitToShow(visit)
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
        onCancelVisit={async () => {
          setIsPopupInformationAboutVisit(false);
          setIsPopupAktionInformation(true);
          setMessage("Wizyta odwo??ana");

          let tmp = visitArray.map((visit) => {
            if (visit?.visitId !== visitToShow?.visitId) return visit
            else {
              let tmpVisit = visit;
              tmpVisit.visitStatusId = 4;
              return tmpVisit;
            }
          })

          setVisitArray(tmp)
          await patchVisit(visitToShow?.visitId, 4, userId)
        }}
        onBookVisit={async () => {
          setIsPopupInformationAboutVisit(false);
          setIsPopupAktionInformation(true);
          setMessage("Wizyta zarezerwowana");


          let tmp = visitArray.map((visit) => {
            if (visit?.visitId !== visitToShow?.visitId) return visit
            else {
              let tmpVisit = visit;
              tmpVisit.visitStatusId = 2;
              return tmpVisit;
            }
          })
          setVisitArray(tmp)

          await patchVisit(visitToShow?.visitId, 2, userId)
        }}
      />
      <PopupAktionInformation
        open={isPopupAktionInformation}
        onClose={() => { setIsPopupAktionInformation(false); }}
        message={message}
      />

    </div>
  )
}

export default MonthlyCalendar;
