import React from "react";
import {useHistory} from 'react-router-dom';
import Post from "./Post";
export default function Blog({title,image,description,link}) {
  const history = useHistory();
  const hi = ()=>{
    console.log('hi');
  }
  return (
    <>
     <div className="col-md-12 col-lg-6 col-sm-12 p-5">
     <div className="p-2">
     <div className="col-sm-12">
      <div className="card bg-dark">
<img src={image} alt="" className="card-img-top"/>
        <div className="card-body p-0">
        <h2 className="card-title text-light text-center plan w-100 bg-dark">{title}</h2>

        <p className="card-text text-light lead description p-3">{description}
        <a onClick={()=> history.push(`${link}`)} className='px-1 mx-1 rounded-1 text-light' style={{backgroundColor:"#D86451"}}> ... Read more</a>
        </p>
        
       </div>
      </div> 
     </div>
     
    </div>
  </div>
    </>
  );
}
