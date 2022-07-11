import './PatientNavigation.css';
import { AiOutlineMenu, AiOutlineImport, AiFillExclamationCircle, AiOutlineMessage } from "react-icons/ai";
import React, { useState } from 'react';
function PatientNavigation({
  firstName,
  lastName,
  messages,
  onMessageClick
}) {

  return (
    <nav className='navbar navbar-dark bg-primary text-light px-3'>
      <div className='navbar-brand col-10'>
        {firstName + " " + lastName}
      </div>
      <div 
      className='float-right'
      onClick={onMessageClick}
      >
        <AiOutlineMessage/>
        <div
          className='msg-count'
        >
          {messages.length}
        </div>
      </div>
      <div className='float-end mr-2'><AiOutlineMenu />
      </div>
    </nav>
  );
}

export default PatientNavigation;
