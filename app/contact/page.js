import React from "react";
import AddressBar from "../components/AddressBar";
import ContactForm from "../components/ContactForm";
import Locations from "../components/Locations";


export default function Contact() {
  return (
    <>
      <AddressBar title="Contact"/>
      <div className="flex-col justify-between lg:flex-row flex">
        <ContactForm/>
        <Locations/>
      </div>
    </>
  );
}