import React from "react";
import img from '../assets/hero.png'
import '../components/Hero.css'
export default function HeroImgBS() {
  return (
    <>
    <div className="ellipse rounded-circle d-none d-xl-block"></div>
    <img src={img} alt="Hero" className="d-none d-lg-block mt-0 position-absolute  hero-image" />
    </>
  );
}
