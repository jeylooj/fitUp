import React from "react";
import InfoAbout from "./InfoAbout";

export default function CtaAbout() {
  return (
    <section className=" w-100 w-lg-50">
      <p className="lead text-light p-5 ">At our fitness and gym, we believe that everyone can achieve their fitness goals with the right guidance and support. Our team of experienced trainers and coaches are dedicated to helping you improve your health and fitness through personalized training programs, nutritional guidance, and motivational support. We offer a wide range of fitness options, including cardio, strength training, group classes, and more. Our state-of-the-art facility is equipped with the latest fitness equipment and technology to help you get the most out of your workouts. Whether you're a beginner or a seasoned athlete, our friendly and supportive community is here to help you achieve your fitness goals and transform your life.</p>
      <button className="d-none d-lg-block bg-dark text-light btn border-light mx-auto my-5">Join us today</button>
      <InfoAbout className='p-0'/>
    </section>
  );
}
