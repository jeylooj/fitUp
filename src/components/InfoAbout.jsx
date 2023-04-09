import React from "react";

export default function InfoAbout() {
  return (
    <section className="d-flex">
    {/* box one */}
      <div className="bg-dark w-100 d-none d-lg-block d-flex">
        <span className="box-info  d-flex ">
          <div className="number text-light fs-1 ">1506</div>
          <span className="name text-light px-4 align-items-baseline">Happy 
          <br/> Memories</span>
        </span>
      </div>
    {/* box two */}
      <div className="bg-dark w-100 d-none d-lg-block d-flex">
        <span className="box-info  d-flex ">
          <div className="number text-light fs-1 ">5</div>
          <span className="name text-light px-4 align-items-baseline">Weeks
          </span>
        </span>
      </div>
    </section>
  );
}
