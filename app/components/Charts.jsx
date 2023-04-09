import React from "react";
import WgainChart from "./WgainChart";
import WlossChart from "./WlossChart";


export default function Charts() {
  return (
    <section className="bg-secondary flex flex-col justify-center px-10  lg:w-2/4">
    <WgainChart/>
    <WlossChart/>
<p className="text-white lg:text-center py-2">we take great pride in the success stories of our members who have achieved remarkable transformations through hard work and dedication.</p>
    </section>
      );
}