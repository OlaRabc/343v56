import './HarmonogramVisitPlanning.css';
import moment from "moment";
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getDoctorSpecializations } from "./../../../apiOperation/getOperaton/GetOperaton";
import { patchVisits } from "./../../../apiOperation/postOperation/PostOperation";
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
          <label  htmlFor="exampleInputCity" className="mx-2">
            Powtarzalność wizyt:
            <Row className="col-12 my-3 " >
              {daysOfWeek.map((name, index) => {
                return (
                  <Col className="col-3" key={name}>
                    <input
                      className="cursor"
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      checked={checkedDay[index]}
                      onChange={() => handleOnChange(index)}

                    />
                    <label htmlFor={`custom-checkbox-${index}`} className="cursor">{name}</label>
                  </Col>
                );
              })}
            </Row>
          </label>
        </Col>
        <Col className="col-12 col-lg-6 my-3" >
          <label  htmlFor="exampleInputCity" className="mx-2">
            Zakres kalendarzowy wizyt:
          </label>
          <input type="date" min={moment(date).format("YYYY-MM-DD")} className="cursor" required
            onChange={e => {
              setVisitDateStart(e.target.value)
              let date = new Date(e.target.value)

              setDateInSecondDateSquare(date.setDate(date.getDate() + 6))
            }}></input>
          {" do "}
          <input type="date" id="secondDateSquare" min={moment(dateInSecondDateSquare).format("YYYY-MM-DD")} className="cursor" required
            onChange={e => {
              setVisitDateEnd(e.target.value)
            }}></input>
        </Col>
        <Col className="col-12 col-md-6
         my-3" >
          <label htmlFor="exampleInputCity" className="mx-2">
            Początek wizyt:
          </label>
          <input type="time" className="cursor" required
            onChange={e => {
              setVisitStart(e.target.value)
            }}></input>
        </Col>
        <Col className="col-12 col-md-6
         my-3" >
          <label htmlFor="exampleInputCity" className="mx-2">
            Czas Wizyty:
          </label>
          <input type="text" name="visitTime" size="1" value="30" className="cursor" disabled
            onChange={e => {
              setTime(e.target.value)
            }} />
        </Col>
        <Col className="col-12 col-md-6
         my-3" >
          <label htmlFor="exampleInputCity" className="mx-2">
            Odstęp między wizytami:
          </label>
          <input type="text" name="timekBetweenVisits" size="1" value="5" className="cursor" disabled
            onChange={e => {
              setTimekBetweenVisits(e.target.value)
            }} />
        </Col>
        <Col className="col-12 col-md-6
         my-3" >
          <label htmlFor="exampleInputCity" className="mx-2">
            Ilość wizyt w jednym dniu:
          </label>
          <input type="number" name="visitCount" size="1" min={1} max={12} step="1" className="cursor"
            onChange={e => {
              setVisitCount(e.target.value)
            }} />
        </Col>
        <Col className="col-12 col-md-12 my-3" >
          <label htmlFor="exampleInputCity" className="mx-2">
            Specjalizacja:
          </label>
          <select className="form-control col-12 p-2 cursor" 
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
            let tmpDateStart = moment(visitDateStart).format("YYYY-MM-DD d") + moment(visitStart, "HH:mm").format(" HH:mm");
            let tmpDateEnd = moment(visitDateEnd).format("YYYY-MM-DD d") + moment(visitStart, "HH:mm").format(" HH:mm");
            let visitList = [];

            let isCheckedDay;
            checkedDay.map((day) => {
              if (day === true) isCheckedDay = true;
            })
            if (chosenSpecialization !== "null" && visitCount > 0 && visitCount < 13 && isCheckedDay && tmpDateStart < tmpDateEnd) {
              let specializationId = 0;
              doctorSpecializations.map((spec => {
                if (spec.specialization.name === chosenSpecialization)
                  specializationId = spec.specialization.specializationId
              }));


              tmpDateEnd = moment(tmpDateEnd, "YYYY-MM-DD d HH:mm").add(1440, 'm').format("YYYY-MM-DD d HH:mm");
              let tmpTime = time + timekBetweenVisits;

              while (tmpDateStart !== tmpDateEnd) {
                let tmpDate = tmpDateStart;
                let tmpDay = parseInt(moment(tmpDate, "YYYY-MM-DD d HH:mm").format("d")) - 1;
                if (tmpDay === -1) tmpDay = 6;
                if (checkedDay[tmpDay])
                  for (let i = 0; i < visitCount; i++) {
                    let tmpVisitEnd = moment(tmpDate, "YYYY-MM-DD d HH:mm").add(30, 'm');
                    let visitToPost = {
                      doctorId: doctorId,
                      visitDate: moment(tmpDate, "YYYY-MM-DD d HH:mm").format("YYYY-MM-DD"),
                      visitStart: moment(tmpDate, "YYYY-MM-DD d HH:mm").format("HH:mm:00"),
                      visitEnd: moment(tmpVisitEnd).format("HH:mm:00"),
                      specializationId: specializationId
                    }
                    visitList.push(visitToPost);

                    tmpDate = moment(tmpDate, "YYYY-MM-DD d HH:mm").add(tmpTime, 'm');
                  }
                tmpDateStart = moment(tmpDateStart, "YYYY-MM-DD d HH:mm").add(1440, 'm').format("YYYY-MM-DD d HH:mm");
              }
              console.log(visitList)


              let x = await patchVisits(visitList);
              console.log("x")
              console.log(x)
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
