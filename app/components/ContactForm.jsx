"use client"
import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactAllIcons from "./ContactAllIcons";
export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2eix2wx', 'template_857fv77', form.current, 'lCQWqcFGkMB1-IQdB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="bg-secondary flex flex-col justify-center gap-4 text-white p-10 lg:w-2/4">
    <h1 className= "text-center text-5xl">Get in <span style={{color:'#D86451'}}>touch </span></h1>
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
      {/* name and surname */}
      <input type="text" name="user_name" required placeholder="Name and surname" 
      className="bg-transparent border-b p-3"/>
      {/* street */}
      <input type="text" placeholder="Street" className="bg-transparent  border-b p-3"/>
      {/* address */}
      <div className="flex gap-x-6">
        <input type="text" placeholder="City" className="w-3/4 bg-transparent  border-b p-3"/>
        <input type="number" placeholder="Postcode" className="w-1/4 bg-transparent border-b p-3"/>
      </div>
      {/* phone */}
      <input type="tel" placeholder="Contact Phone" className="bg-transparent border-b p-3"/>
      {/* email input */}
      <input type="email" name="user_email" required placeholder="E-Mail" className="bg-transparent border-b p-3"/>
      {/* text input */}
      <textarea name="message" required placeholder="Got a question? Write for us!" className="text-center text-primary bg-transparent border p-3 mt-3"/>
      {/* description */}
      <p className="p-2 text-center">We would love to hear from you! If you have any questions or would like to learn more about our fitness programs, please don't hesitate to get in touch with us.</p>
      {/* submit */}
      <input type="submit" value="submit" className="bg-primary rounded py-3"/>
    </form>
    <ContactAllIcons/>
    </div>
  );
}