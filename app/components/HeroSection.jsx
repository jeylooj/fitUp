import React from 'react';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <section className='md:flex items-center  justify-items-center content-center align-middle mt-12'>

{/* Text BOX */}
<div className='text-white flex flex-col gap-4 p-5 md:w-2/4 '>
  <div className='border-y-4 py-2'>
  <h1 className='uppercase cus-font text-8xl text-center py-3'> <span className='text-secondary'>Keep</span> <br /> Going</h1>
  <span className='capitalize  cus-font'>Never Stop</span>
  </div>
  <p className='w-10/12'>This is no time to back up! It’s time to move on and move on strong! join us on the journey to become the best! We are a high quality Gym that has obtained the trust of thousands of athletes...</p>
  <button className='btn'>Learn more</button>
</div>

  {/* Hero Image */}
  <Image
src='/images/hero.png'
width={700}
height={600}
alt='athlete man'
className='w-2/4 right-0 invisible md:visible'
/>
    </section>
  );
}

export default HeroSection;
