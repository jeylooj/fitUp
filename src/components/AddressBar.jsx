import React from "react";
import logo from "../assets/logo.svg"
export default function AddressBar({title}) {
  return (
    <>
      <section className="bg-dark px-4 py-1">
        <h4 className="text-light py-1" style={{letterSpacing:1}}> {title}</h4>
      </section>
    </>
  );
}
