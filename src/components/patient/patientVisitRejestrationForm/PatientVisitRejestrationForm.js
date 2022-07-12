import "./PatientVisitRejestrationForm.css";
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillCaretLeft, AiFillCaretRight, AiOutlineEnvironment } from "react-icons/ai";
import { getCities, getSpecializations, getDoctrsBySpecialization, getDoctrsBySpecializationAndCity } from "./../../../apiOperation/getOperaton/GetOperaton";
import { useSelector, useDispatch } from 'react-redux';
import { setDoctorId } from './../../../features/counter/counterSlice';

function PatientVisitRejestrationForm({
   userId,
   onBack,
   onDoctorClick
}) {
   const [doctorList, setDoctorList] = useState([]);

   const [cities, setCities] = useState([]);
   const [chosenCity, setChosenCity] = useState("null");
   const [specializations, setSpecializations] = useState([]);
   const [chosenSpecialization, setChosenSpecialization] = useState("null");

   const doctorId = useSelector((state) => state.doctorId.value)
   const dispatch = useDispatch()

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
         {console.log(doctorList)}
         <div className="col-1 offset-md-1 back" onClick={onBack}>
            <AiFillCaretLeft />
         </div>
         <form className="col-12 col-lg-9 offset-lg-3 ">
            <div className="col-12 mx-3">
               Znajdź Doktora:
            </div>
            <div className="col-12 col-lg-6 mt-2 form-group">
               <label htmlFor="exampleInputCity" className="mx-2">
                  Miasto:
               </label>

               <select
                  className="form-control col-12 p-2"
                  onChange={e => {
                     setChosenCity(e.target.value)
                  }}>
                  <option key={0} value={"null"}>
                     Brak
                  </option>
                  {cities.map((city) => {
                     return (
                        <option key={city.name} value={city.id}>
                           {city.name}
                        </option>
                     )
                  })}
               </select>
            </div>
            <div className="col-12 col-lg-6 mt-2 form-group">
               <label htmlFor="exampleInputSpecjalization" className="mx-2" >
                  Specjalizacja:
               </label>
               <select className="form-control col-12 p-2"
                  onChange={e => {
                     setChosenSpecialization(e.target.value)
                  }}>
                  <option key={0} value={"null"}>
                     Brak
                  </option>


                  {specializations.map((specialization) => {
                     return (
                        <option key={specialization.name} value={specialization.name}>
                           {specialization.name}
                        </option>
                     )
                  })}
               </select>
            </div>
            <button
               type="button"
               className="btn bg-primary text-light col-12 col-lg-4 my-4 offset-lg-1"
               onClick={async () => {
                  let tmpSpec;
                  specializations.map((spec) => {
                     if (spec.name === chosenSpecialization) tmpSpec = spec.specializationId
                  })

                  let tmpCity;
                  cities.map((city) => {
                     if (city.name === chosenCity) tmpCity = city.cityId
                  })

                  if (chosenSpecialization !== "null" && chosenCity === "null") {
                     setDoctorList(await getDoctrsBySpecialization(tmpSpec));
                  }
                  if (chosenSpecialization !== "null" && chosenCity !== "null") {
                     setDoctorList(await getDoctrsBySpecializationAndCity(tmpSpec, tmpCity));
                  }
               }}>
               Szukaj
            </button>
         </form>

         <Row className="col-11 mt-2">
            {doctorList.map((doctor) => {
               return (
                  <Row
                     className="col-12 bg-primary text-light m-2 p-3 rounded doctor-query"
                     key={doctor.id}
                     onClick={() => {
                        dispatch(setDoctorId(doctor || null))
                        onDoctorClick()
                     }}>
                     <Col className="col-12 col-lg-4">
                        {"Dr " + doctor.doctor.firstName + " " + doctor.doctor.lastName}
                     </Col>
                     <Col className="col-12 col-lg-4">
                        {doctor.doctor.city.name + ", " + doctor.doctor.street + " " + doctor.doctor.localNumber}
                     </Col>
                     <Col className="col-12 col-lg-4">
                        Najbliższy wolny termin:
                     </Col>
                  </Row>
               )
            })}
         </Row>
      </Container>
   )
}

export default PatientVisitRejestrationForm;
