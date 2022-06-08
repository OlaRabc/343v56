import './PatientNavigation.css';
import {AiOutlineMenu, AiOutlineImport, AiFillExclamationCircle, AiOutlineMessage} from "react-icons/ai";
/* menu,exit,! , massage*/
function PatientNavigation({
  firstName,
  lastName
}) {
  return (
    <nav className='navbar navbar-dark bg-primary text-light '>
      {firstName+" "+lastName}
      <AiOutlineMessage/> 
      <AiOutlineMenu/>
    </nav>
  );
}

export default PatientNavigation;
