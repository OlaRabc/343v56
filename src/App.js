import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginScrean from "./components/routers/loginScrean/LoginScrean";
import PatientPage from "./components/routers/patientPage/PatientPage";

function App() {
  
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScrean/>}>
          </Route>

          <Route path="parient" element={<PatientPage/>}>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
