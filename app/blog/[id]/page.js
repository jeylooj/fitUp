'use client'
import AddressBar from "@/app/components/AddressBar";
import React from "react";


export default function BlogPost({params:{id}}) {

  return (
    <>
    <AddressBar title='Blog'/>
    <div className="p-10 flex justify-between flex-col lg:flex-row">
      <section className="w-full lg:w-3/4">
     <h1 className="px-5 bg-secondary cus-font text-white text-center h-14 flex align-middle justify-center items-center">TITLE POST :{id}</h1>
      <p className=" text-white p-5 text-lg  sm:w-full leading-9">Transforming your body is more than just a physical change; it's a mental and emotional one as well. A fitness journey is a process of self-discovery and growth. Whether you're looking to lose weight, gain muscle, improve your health, or simply feel better about yourself, the journey of transforming your body is a holistic one that involves your mind, body, and emotions.
      At the core of any fitness journey is the desire for self-improvement. This requires a mindset shift towards adopting healthier habits, such as regular exercise, proper nutrition, and adequate rest. This mental shift is not always easy and requires a lot of discipline and commitment, but it is essential for success.
      Transforming your body also involves emotional growth. It requires addressing and working through any emotional barriers or negative self-talk that may have held you back in the past. </p>
    </section>
    <img src="/images/11.png" alt="" className="border-secondary border-8 bg-secondary"/>
    </div>
    </>
  );
}