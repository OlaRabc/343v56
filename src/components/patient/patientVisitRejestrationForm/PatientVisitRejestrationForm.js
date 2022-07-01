import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./PatientVisitRejestrationForm.css";
import { AiFillCaretLeft, AiFillCaretRight, AiOutlineEnvironment } from "react-icons/ai";
import { getCities, getSpecializations, getDoctrsBySpecialization, getDoctrsBySpecializationandCity } from "./../../../apiOperation/getOperaton/GetOperaton";

function PatientVisitRejestrationForm({
   userId,
   onBack
}) {
   const [doctorList, setDoctorList] = useState([]);
   const [firstFreeVisitList, setFirstFreeVisitList] = useState([]);

   const [cities, setCities] = useState([]);
   const [chosenCitie, setChosenCitie] = useState("null");
   const [specializations, setSpecializations] = useState([]);
   const [chosenSpecialization, setChosenSpecialization] = useState("null");

   useEffect(() => {
      getCities()
         .then(data =>
            setCities(data)
         );
   }, [])
   useEffect(() => {
      getSpecializations()
         .then(data =>
            setSpecializations(data)
         );
   }, [])

   return (
      <Container className="col-12">
         <div className="col-1 offset-md-1 back" onClick={onBack}>
            <AiFillCaretLeft />
         </div>
         <form className="col-12 col-lg-9 offset-lg-3 ">
            <div className="col-12 mx-3">
               Znajdź Doktora:
            </div>
            <div className="col-12 col-lg-6 mt-2 form-group">
               <label for="exampleInputCity" className="mx-2">Miasto:</label>

               <select className="form-control col-12 p-2"
                  onChange={e => {
                     setChosenCitie(e.target.value)
                  }}>
                  <option key={0} value={"null"}>
                     Brak
                  </option>
                  {cities.map((city) => {
                     return (
                        <option key={city.id} value={city.id}>
                           {city.name}
                        </option>
                     )
                  })}
               </select>
            </div>
            <div className="col-12 col-lg-6 mt-2 form-group">
               <label for="exampleInputSpecjalization" className="mx-2" >Specjalizacja:</label>
               <select className="form-control col-12 p-2"
                  onChange={e => {
                     setChosenSpecialization(e.target.value)
                  }}>
                  <option key={0} value={"null"}>
                     Brak
                  </option>


                  {specializations.map((specialization) => {
                     return (
                        <option key={specialization.specialization_id} value={specialization.name}>
                           {specialization.name}
                        </option>
                     )
                  })}
               </select>
            </div>
            <button type="button" className="btn bg-primary text-light col-12 col-lg-4 mt-4 offset-lg-1"
               onClick={async () => {
                  if (chosenSpecialization !== "null" && chosenCitie === "null") {
                     setDoctorList(await getDoctrsBySpecialization(chosenSpecialization));
                  }
                  if (chosenSpecialization !== "null" && chosenCitie !== "null") {
                     setDoctorList(await getDoctrsBySpecializationandCity(chosenSpecialization, chosenCitie));
                  }
               }}>
               Szukaj
            </button>
         </form>
         <Row className="col-11 mt-2">
            {doctorList.map((doctor) => {
               return (
                  <Row className="btn col-12 bg-primary text-light m-2 p-2 doctor-query"
                  onClick={() => {
                     console.log("ss")
                  }}>
                     <Col className="">{doctor.doctor.firstName + " " + doctor.doctor.lastName}</Col>
                     <Col className=""><AiOutlineEnvironment/>{doctor.doctor.city.name + ", " +doctor.doctor.street + " " + doctor.doctor.localNumber}</Col>
                     <Col className="">wolny termin</Col>
                     <Col className=""> <AiFillCaretRight/> </Col>
                  </Row>
               )
            })}
         </Row>
      </Container>
   )
}

export default PatientVisitRejestrationForm;
