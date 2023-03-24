import React from "react";
import WgainChart from "./WgainChart";
import WlossChart from "./WlossChart";

export default function Charts() {
  return (
    <section className="bg-dark d-flex flex-column justify-content-center px-5 w-100 w-lg-50">
    <WgainChart/>
    <WlossChart/>
<p className="text-light w-100 text-center mx-auto lead">we take great pride in the success stories of our members who have achieved remarkable transformations through hard work and dedication.</p>
    </section>
      );
}
