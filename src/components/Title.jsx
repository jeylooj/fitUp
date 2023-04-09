import React from "react";

export default function Title(props) {
  return <h1 style={{letterSpacing:10,margin:'150px auto'}} className="text-light text-center" id="gallery" >{props.title}</h1>;
}
