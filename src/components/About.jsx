import React from "react";
import AddressBar from "./AddressBar";
import Charts from "./Charts";
import CtaAbout from "./CtaAbout";

export default function About() {
  return (
    <section>
      <AddressBar title='About us'/>
<div className="d-flex justify-content-between h-auto flex-column flex-lg-row">
    <CtaAbout/>
    <Charts/>
</div>
 
    </section>
  );
}
