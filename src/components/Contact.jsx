import React from "react";
import AddressBar from "./AddressBar";
import ContactForm from "./ContactForm";
import Location from "./Location";

export default function Contact() {
  return (
    <>
      <AddressBar title="Contact"/>
      <div className="d-flex justify-content-between h-auto flex-column flex-lg-row contact">
        <ContactForm/>
        <Location/>
      </div>
    </>
  );
}
