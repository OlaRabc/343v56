import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginScreen from "./components/routers/loginScreen/LoginScreen";
import PatientPage from "./components/routers/patientPage/PatientPage";
import DoctorPage from "./components/routers/doctorPage/DoctorPage";
import React, { useState } from 'react';

function App() {
  const [nextPage, setNextPage] = useState("login");
  return (
    <div id="App">
      {nextPage === "login" ? <LoginScreen
        onLoginPatient={() => { setNextPage("parient") }}
        onLoginDoctor={() => { setNextPage("doctor") }}
      /> : ""}
      {nextPage === "parient" ? <PatientPage /> : ""}
      {nextPage === "doctor" ? <DoctorPage /> : ""}
    </div>
  );
}

export default App;
/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen/>}>
          </Route>

          <Route path="patient" element={<PatientPage/>}>
          </Route>
          
        </Routes>
      </BrowserRouter>
*/