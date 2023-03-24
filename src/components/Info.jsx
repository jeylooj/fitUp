import React from "react";
import '../components/info.css'
export default function Info() {
  return (
    <section className="d-flex">
    {/* box one */}
      <div className="bg-dark w-100 d-none d-lg-block d-flex">
        <span className="box-info  d-flex ">
          <div className="number text-light fs-1 ">180</div>
          <span className="name text-light px-4 align-items-baseline">Work out 
          <br/> plans</span>
        </span>
      </div>
    {/* box two */}
      <div className="bg-dark w-100 d-none d-lg-block d-flex">
        <span className="box-info  d-flex ">
          <div className="number text-light fs-1 ">35</div>
          <span className="name text-light px-4 align-items-baseline">Trainers
          </span>
        </span>
      </div>
    {/* box three */}
      <div className="bg-dark w-100 d-none d-lg-block d-flex">
        <span className="box-info  d-flex ">
          <div className="number text-light fs-1 ">12</div>
          <span className="name text-light px-4 align-items-baseline">Locations 
          </span>
        </span>
      </div>
    {/* box four */}
      <div className="bg-dark w-100 d-none d-lg-block d-flex">
        <span className="box-info  d-flex ">
          <div className="number text-light fs-1 ">VIP</div>
          <span className="name text-light px-4 align-items-baseline">Section For
          <br/> members</span>
        </span>
      </div>
    </section>
  );
}
