import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../components/contactForm.css';
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
    <div className="form bg-dark d-flex flex-column justify-content-center  w-100 w-lg-50 p-5">
    <h1 className="text-light text-center display-4">Get in <span style={{color:'#D86451'}}>touch </span></h1>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" required placeholder="Name and surname"/>
      <input type="text" placeholder="Street" />
      <div className="d-flex justify-content-between">
        <input type="text" placeholder="City" className="w-50"/>
        <input type="number" placeholder="Postcode" className="w-25"/>
      </div>
      <input type="tel" placeholder="Contact Phone"/>
      <input type="email" name="user_email" required placeholder="E-Mail" />
      <textarea name="message" required placeholder="Got a question? Write for us!" className="text-center text-secondary"/>
      <p className=" text-light p-2 text-center">We would love to hear from you! If you have any questions or would like to learn more about our fitness programs, please don't hesitate to get in touch with us.</p>
      <input type="submit" value="submit" className="submit-btn"/>
    </form>
    <ContactAllIcons/>
    </div>
  );
}
