import React from 'react';
import PlansData from '../PlansData';
import  'styles/plans.module.css';
const Plans = () => {
  
  return (
    <section className='grid lg:grid-cols-3 md:grid-cols-2 p-10 gap-10 bg-secondary w-full place-items-center text-center'>
      {
        PlansData.map((e)=>{
          return (
            
            <div className="bg-secondary relative w-80 rounded-lg shadow text-white" key={e.id} >
            <img
              src={e.image}
              alt=""
              className="rounded-t-lg w-full"
            />
            <header className="font-extrabold p-2 bg-secondary cus-font text-2xl absolute top-4 w-full">{e.plan}</header>
            <header className="font-extrabold p-2 bg-secondary cus-font text-4xl absolute top-80 w-full">$ {e.price}</header>
            <div className="px-5">
              <p className="p-4">
                {e.description}
              </p>
            </div>
            </div>
        )})
      }
    </section>
  );
}

export default Plans;
