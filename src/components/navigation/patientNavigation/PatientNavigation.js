import './PatientNavigation.css';
import {AiOutlineMenu, AiOutlineImport, AiFillExclamationCircle, AiOutlineMessage} from "react-icons/ai";
/* menu,exit,! , massage*/
function PatientNavigation({
  firstName,
  lastName
}) {
  return (
    <nav className='navbar navbar-dark bg-primary text-light '>
      <div className='navbar-brand '>
        {firstName+" "+lastName}
      </div>
      <AiOutlineMessage/> 
      <div className='navbar-toggler mr-2'><AiOutlineMenu/></div>
    </nav>
  );
}

export default PatientNavigation;
