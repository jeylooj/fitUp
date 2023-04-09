import React from "react";

export default function AddressBar({title}) {
  return (
    <>
      <section className="bg-secondary py-4 px-10 mt-5">
        <h4 className="text-white py-1 text-lg" style={{letterSpacing:"3px"}}> {title}</h4>
      </section>
    </>
  );
}