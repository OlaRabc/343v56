import './OneVisitPlanning.css';
import moment from "moment";
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getDoctorSpecializations } from "./../../../apiOperation/getOperaton/GetOperaton";
import { patchVisit } from "./../../../apiOperation/postOperation/PostOperation";
import { addZero } from "./../../util/dateHelper";
import PopupDoctorInvalidData from "./../../popups/popupDoctorInvalidData/PopupDoctorInvalidData";
function OneVisitPlanning({
  isDoctor,
  doctorId
}) {
  let date = new Date();
  date.setDate(date.getDate() + 1);
  const [doctorSpecializations, setDoctorSpecializations] = useState([]);
  const [chosenSpecialization, setChosenSpecialization] = useState("null");
  const [visitDate, setVisitDate] = useState(date);
  const [visitStart, setVisitStart] = useState("00:00:00");
  const [time, setTime] = useState(30);

  const [isPopupDoctorInvalidData, setIsPopupDoctorInvalidData] = useState(false);
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

        <Col className="col-12 col-md-4 my-3" >
          <label for="exampleInputCity" className="mx-2">
            Data wizyty:
          </label>
          <input type="date" min={moment(date).format("YYYY-MM-DD")} required
            onChange={e => {
              setVisitDate(e.target.value)
            }}></input>
        </Col>
        <Col className="col-12 col-md-4 my-3" >
          <label for="exampleInputCity" className="mx-2">
            Początek wizyty:
          </label>
          <input type="time" required
            onChange={e => {
              setVisitStart(e.target.value)
            }}></input>
        </Col>
        <Col className="col-12 col-md-4 my-3" >
          <label for="exampleInputCity" className="mx-2"
            onChange={e => {
              setTime(e.target.value)
            }}>
            Czas Wizyty:
          </label>
          <input type="text" name="visitTime" size="1" value="30" disabled />
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
            let visitToPost = {
              doctorId: doctorId,
              visitDate: visitDate,
              visitStart: moment(visitStart, "HH:mm").format("HH:mm:00"),
              visitEnd: moment(visitStart, "HH:mm").add(30, 'm').format("HH:mm:ss"),
              specialization: chosenSpecialization
            }
            if (chosenSpecialization !== "null") {
              await patchVisit(visitToPost);
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

export default OneVisitPlanning;
