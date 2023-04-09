import React from "react";

export default function Post({title,image}) {
  return (
    
    <div className="d-flex justify-content-between h-auto flex-column-reverse flex-lg-row px-5">
      <section className=" w-100 w-lg-50">
     <h1 className="px-5 my-2 bg-dark text-light text-center">title</h1>
      <p className="lead text-light p-5 ">Transforming your body is more than just a physical change; it's a mental and emotional one as well. A fitness journey is a process of self-discovery and growth. Whether you're looking to lose weight, gain muscle, improve your health, or simply feel better about yourself, the journey of transforming your body is a holistic one that involves your mind, body, and emotions.
      At the core of any fitness journey is the desire for self-improvement. This requires a mindset shift towards adopting healthier habits, such as regular exercise, proper nutrition, and adequate rest. This mental shift is not always easy and requires a lot of discipline and commitment, but it is essential for success.
      Transforming your body also involves emotional growth. It requires addressing and working through any emotional barriers or negative self-talk that may have held you back in the past. </p>
    </section>
    <img src="/images/11.png" alt="" className="my-2 border border-dark border-5"/>
    </div>
  );
}
