import './PatientNavigation.css';
import { AiOutlineMenu, AiOutlineImport, AiFillExclamationCircle, AiOutlineMessage } from "react-icons/ai";
import React, { useState } from 'react';
function PatientNavigation({
  firstName,
  lastName,
  messages,
  onMessageClick
}) {
  const [isPopupMessage, setIsPopupMessage] = useState(false);

  return (
    <nav className='navbar navbar-dark bg-primary text-light px-3'>
      <div className='navbar-brand '>
        {firstName + " " + lastName}
      </div>
      <div onClick={onMessageClick}>
        <AiOutlineMessage />
        {messages.length}
      </div>
      <div className='navbar-toggler mr-2'><AiOutlineMenu /></div>
    </nav>
  );
}

export default PatientNavigation;
