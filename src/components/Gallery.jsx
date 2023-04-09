import React from "react";

export default function Gallery({name,video,description}) {
  return (
    <div className="" id="galley">
    <div className="col">
      <div className="card bg-dark">
      <iframe src={video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="embed-responsive embed-responsive-4by3 rounded-3" style={{height:'400px'}}></iframe>
<div className="card-body p-0">
        <h2 className="card-title text-light text-center plan w-100 bg-dark fs-4">{name}</h2>
        <p className="card-text text-light text-center lead description p-3">{description}</p>
      </div>
      </div>
    </div> 
    
    </div> 
  )
}
