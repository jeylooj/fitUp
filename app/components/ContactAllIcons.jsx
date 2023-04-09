import React from "react";
import { FaEnvelopeOpen,FaInfoCircle, FaPhone} from 'react-icons/fa'



export default function ContactAllIcons() {
  return (
    <div className="flex flex-col items-center lg:flex-row  justify-between align-middle ">

       <div className="flex align-middle p-2 items-center" style={{gap:"20px"}}>
       <FaPhone></FaPhone>
    <div className="flex flex-col">
      <span>Phone</span>
      <span>111 111 111</span>
    </div>
  </div>
       <div className="flex align-middle p-2 items-center" style={{gap:"20px"}}>
       <FaEnvelopeOpen></FaEnvelopeOpen>
    <div className="flex flex-col">
      <span>E-MAIL</span>
      <span>info@fitup.com</span>
    </div>
  </div>
       <div className="flex align-middle p-2 items-center" style={{gap:"20px"}}>
       <FaInfoCircle></FaInfoCircle>
    <div className=" flex flex-col text-white">
      <span>HELPDESK</span>
      <a>https://helpdesk.com</a>
    </div>
  </div>
    </div>
  );
}