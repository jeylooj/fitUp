import React from "react";
import '../components/plans.css'


export default function Plans({plan,price,image,description}) {
  return (
    <div className="" id="plans">
    <div className="col">
      <div className="card bg-dark ">
<img src={image} alt="" className="card-img-top"/>
<div className="card-body p-0">
        <h2 className="card-title text-light text-center plan w-100 bg-dark">{plan}</h2>
        <h3 className=" text-light text-center price bg-dark w-100 display-5">{price}</h3>
        <p className="card-text text-light text-center lead description p-3">{description}</p>
      </div>
      </div>
    </div> 
    
    </div> 
  )
}
