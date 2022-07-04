import './OneVisitPlanning.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getDoctorSpecializations } from "./../../../apiOperation/getOperaton/GetOperaton";
function OneVisitPlanning({
  isDoctor,
  doctorId
}) {
  const [doctorSpecializations, setDoctorSpecializations] = useState([]);
  const [chosenSpecialization, setChosenSpecialization] = useState("null");
  const [visitDate, setVisitDate] = useState(new Date());
  const [visitStart, setVisitStart] = useState("00:00");
  const [time, setTime] = useState(30);

  useEffect(() => {
    getDoctorSpecializations(doctorId)
      .then(data =>
        setDoctorSpecializations(data)
      );
  }, [])

  return (
    <Container className="col-12" >
      <Row className="col-12 my-3 p-1 patent-operation-vew" >

        <Col className="col-12 col-md-4 my-3" >
          <label for="exampleInputCity" className="mx-2">
            Data wizyty:
          </label>
          <input type="date" required
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
          <input type="text" name="pin" size="4" value="30" disabled />
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
          <button type="button" className="btn btn-primary col-12 p-2" onClick={() => {
            console.log(chosenSpecialization)
            console.log(time)
            console.log(visitDate)
            console.log(visitStart)
          }}>
            Planuj
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default OneVisitPlanning;
