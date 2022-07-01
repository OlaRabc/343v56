import './DoctorNavigation.css';
import {AiOutlineMenu, AiOutlineImport, AiFillExclamationCircle, AiOutlineMessage} from "react-icons/ai";

function DoctorNavigation({
  firstName,
  lastName
}) {
  return (
    <nav className='navbar navbar-dark bg-primary text-light '>
      <div className='mx-3 navbar-brand '>
        {"Dr "+firstName+" "+lastName}
      </div>
      <div className='navbar-toggler mr-2'><AiOutlineMenu/></div>
    </nav>
  );
}

export default DoctorNavigation;
