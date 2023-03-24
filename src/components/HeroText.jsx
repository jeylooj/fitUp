import React from "react";
import '../components/Hero.css';
export default function HeroText() {
  return (
   <div className="w-50 p-5 text-box">
   <div className="title border-top border-bottom text-center lh-sm border-3">
    <h1 className="display-1 lead title">KEEP <br /> <span className="text-light title">GOING</span></h1>
    <h6 className="text-light text-start sub-title">Never Stop</h6>
    </div>
    <p className="text-light w-100 ">This is no time to back up! It’s time to move on and move on strong! join us on the journey to become the best! We are a high quality Gym that has obtained the trust of thousands of athletes...</p>
    <button className="bg-dark text-light btn">Learn more</button>
   </div>
  );
}
