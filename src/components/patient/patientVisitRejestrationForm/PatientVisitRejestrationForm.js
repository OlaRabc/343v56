import React, { useEffect, useState } from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import "./PatientVisitRejestrationForm.css";
import { AiFillCaretLeft } from "react-icons/ai";
import { getCities, getSpecializations } from "./../../../apiOperation/getOperaton/GetOperaton";

function PatientVisitRejestrationForm({
   userId,
   onBack
}) {
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
      <div className="col-12">
         <div className="col-1 offset-md-1 back" onClick={onBack}>
            <AiFillCaretLeft />
         </div>
         <form className="col-9 offset-lg-3">
            <div className="mx-3">
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
                     )})}
               </select>
            </div>
            <div className="col-12 col-lg-6 mt-2 form-group">
               <label for="exampleInputSpecjalization" className="mx-2" >Specjalizacja:</label>
               <select className="form-control col-12 p-2" 
               onChange={e => {
                  setChosenSpecialization(e.target.value)
              }}>
                  {specializations.map((specialization) => {
                     return (
                     <option key={specialization.specialization_id} value={specialization.name}>
                        {specialization.name}
                     </option>
                     )})}
               </select>
            </div>
            <button type="button" className="btn bg-primary text-light col-12 col-lg-4 mt-4 offset-lg-1" onClick={() => {
               console.log("szuk");
               console.log(chosenCitie);
               console.log(chosenSpecialization);
            }}>
               Szukaj
            </button>
         </form>
      </div>
   )
}

export default PatientVisitRejestrationForm;
