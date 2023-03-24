import React from "react";
import ContactIcon from "./ContactIcon";

export default function ContactAllIcons() {
  return (
    <div className="d-flex  justify-content-between align-items-center flex-column flex-lg-row text-center">
       <div className="d-flex d-flex-gap align-items-center p-2" style={{gap:"20px"}}>
       <i class="fa-solid fa-phone-volume" style={{color:'#fff'}}></i>
    <div className="text-data d-flex flex-column text-light">
      <span>Phone</span>
      <span>111 111 111</span>
    </div>
  </div>
       <div className="d-flex d-flex-gap align-items-center p-2" style={{gap:"20px"}}>
       <i class="fa-solid fa-envelope-open" style={{color:'#fff'}}></i>
    <div className="text-data d-flex flex-column text-light">
      <span>E-MAIL</span>
      <span>info@fitup.com</span>
    </div>
  </div>
       <div className="d-flex d-flex-gap align-items-center p-2" style={{gap:"20px"}}>
       <i class="fa-solid fa-circle-info" style={{color:'#fff'}}></i>
    <div className="text-data d-flex flex-column text-light">
      <span>HELPDESK</span>
      <span>https://helpdesk.com</span>
    </div>
  </div>
    </div>
  );
}
