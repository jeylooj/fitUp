import React from "react";
import HeroImgBS from "./HeroImgBS";
import HeroText from "./HeroText";
import '../assets/font/NoizeSport-Regular.ttf';

export default function HeroBS() {
  return (
    <div className="d-lg-flex justify-content-between w-100 position-relative ">
  <HeroText/>
  <HeroImgBS/>
    </div>
  );
}
