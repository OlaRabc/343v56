import './HarmonogramVisitPlanning.css';
import moment from "moment";
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getDoctorSpecializations } from "./../../../apiOperation/getOperaton/GetOperaton";
import { patchVisit } from "./../../../apiOperation/postOperation/PostOperation";
import { addZero } from "./../../util/dateHelper";
import PopupDoctorInvalidData from "./../../popups/popupDoctorInvalidData/PopupDoctorInvalidData";
function HarmonogramVisitPlanning({
  isDoctor,
  doctorId
}) {
  const daysOfWeek = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Ndz"];
  let date = new Date();
  date.setDate(date.getDate() + 1);

  const [doctorSpecializations, setDoctorSpecializations] = useState([]);

  const [checkedDay, setCheckedState] = useState(
    new Array(daysOfWeek.length).fill(false)
  );
  const [visitDateStart, setVisitDateStart] = useState(date);
  const [visitDateEnd, setVisitDateEnd] = useState(date);
  const [visitStart, setVisitStart] = useState("00:00:00");
  const [time, setTime] = useState(30);
  const [timekBetweenVisits, setTimekBetweenVisits] = useState(5);
  const [visitCount, setVisitCount] = useState(12);
  const [chosenSpecialization, setChosenSpecialization] = useState("null");

  const [dateInSecondDateSquare, setDateInSecondDateSquare] = useState(date);

  const [isPopupDoctorInvalidData, setIsPopupDoctorInvalidData] = useState(false);


  const handleOnChange = (position) => {
    const updatedCheckedState = checkedDay.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    getDoctorSpecializations(doctorId)
      .then(data =>
        setDoctorSpecializations(data)
      )
      .catch(function (error) {
        console.log(error);
      });;
  }, [])

  return (
    <Container className="col-12" >
      <Row className="col-12 my-3 p-1 patent-operation-vew" >
        <Col className="col-12 col-lg-6 my-3" >
          <label for="exampleInputCity" className="mx-2">
            Powtarzalność wizyt:
            <Row className="col-12 my-3 " >
              {daysOfWeek.map((name, index) => {
                return (
                  <Col className="col-3" key={name}>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      checked={checkedDay[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </Col>
                );
              })}
            </Row>
          </label>
        </Col>
        <Col className="col-12 col-lg-6 my-3" >
          <label for="exampleInputCity" className="mx-2">
            Zakres kalendarzowy wizyt:
          </label>
          <input type="date" min={moment(date).format("YYYY-MM-DD")} required
            onChange={e => {
              setVisitDateStart(e.target.value)
              let date = new Date(e.target.value)

              setDateInSecondDateSquare(date.setDate(date.getDate() + 7))
            }}></input>
          {" do "}
          <input type="date" id="secondDateSquare" min={moment(dateInSecondDateSquare).format("YYYY-MM-DD")} required
            onChange={e => {
              setVisitDateEnd(e.target.value)
            }}></input>
        </Col>
        <Col className="col-12 col-md-6
         my-3" >
          <label for="exampleInputCity" className="mx-2">
            Początek wizyt:
          </label>
          <input type="time" required
            onChange={e => {
              setVisitStart(e.target.value)
            }}></input>
        </Col>
        <Col className="col-12 col-md-6
         my-3" >
          <label for="exampleInputCity" className="mx-2">
            Czas Wizyty:
          </label>
          <input type="text" name="visitTime" size="1" value="30" disabled
            onChange={e => {
              setTime(e.target.value)
            }} />
        </Col>
        <Col className="col-12 col-md-6
         my-3" >
          <label for="exampleInputCity" className="mx-2">
            Odstęp między wizytami:
          </label>
          <input type="text" name="timekBetweenVisits" size="1" value="5" disabled
            onChange={e => {
              setTimekBetweenVisits(e.target.value)
            }} />
        </Col>
        <Col className="col-12 col-md-6
         my-3" >
          <label for="exampleInputCity" className="mx-2">
            Ilość wizyt w jednym dniu:
          </label>
          <input type="number" name="visitCount" size="1" min={1} max={12} step="1"
            onChange={e => {
              setVisitCount(e.target.value)
            }} />
        </Col>
        <Col className="col-12 col-md-12 my-3" >
          <label for="exampleInputCity" className="mx-2">
            Specjalizacja:
          </label>
          <select className="form-control col-12 p-2"
            onChange={e => {
              setChosenSpecialization(e.target.value)
            }}>
            <option key={0} value={"null"}>
              Brak
            </option>
            {doctorSpecializations.map((specialization) => {
              return (
                <option key={specialization.id}>
                  {specialization.specialization.name}
                </option>
              )
            })}
          </select>

        </Col>
      </Row>

      <Row>
        <Col className="col-12 my-3 " >
          <button type="button" className="btn btn-primary col-12 p-2" onClick={async () => {
            let visitList = [];


            let hours = parseInt(moment(visitStart, "HH:mm").format("HH"));
            let minutes = parseInt(moment(visitStart, "HH:mm").format("mm"));

            minutes += 30;
            if (minutes >= 60) {
              minutes -= 60;
              hours++;
              //hours>24
            }

            console.log("###############")
            var newDateObj = moment(visitStart,"HH:mm").add(30, 'm').format("HH:mm:ss");
            console.log(moment(visitStart,"HH:mm").add(30, 'm').format("HH:mm:ss"))
            console.log("################")
            let visitToPost = {
              doctorId: doctorId,
              visitDate: null,
              visitStart: moment(visitStart, "HH:mm").format("HH:mm:00"),
              visitEnd: null,
              specialization: chosenSpecialization
            }
            visitList.push(visitToPost)
            //////////////////////
            console.log(checkedDay)
            console.log(visitDateStart)
            console.log(visitDateEnd)
            console.log(visitStart)
            console.log(time)
            console.log(timekBetweenVisits)
            console.log(visitCount)
            console.log(chosenSpecialization)
            //////////////////////


            console.log("@@@@@@@@@@@@@@@@@@@@@")
            console.log(visitList)
            console.log("@@@@@@@@@@@@@@@@@@@@@")

            let isCheckedDay;
            checkedDay.map((day) => {
              if (day === true) isCheckedDay = true;
            })
            if (chosenSpecialization !== "null" && visitCount > 0 && visitCount < 13 && isCheckedDay) {/* + zaznaczony jakis dzien tygodznia  */
              //await patchVisit(visitToPost);
              console.log("await patchVisit(visitToPost)")
            }
            else {
              setIsPopupDoctorInvalidData(true);
            }
          }}>
            Planuj
          </button>
        </Col>
      </Row>

      <PopupDoctorInvalidData
        open={isPopupDoctorInvalidData}
        onClose={() => { setIsPopupDoctorInvalidData(false); }}
      />
    </Container>
  );
}

export default HarmonogramVisitPlanning;
