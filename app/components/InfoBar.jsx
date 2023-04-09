import React from 'react';

const InfoBar = () => {
  return (
    <div className='hidden invisible'>
      <section className='cus-font bg-secondary text-white justify-around p-2'>
        {/* box one */}
        <div className='flex justify-between gap-5'>
          <span className='text-5xl'>180</span>
          <span className=''>Work out <br /> plans</span>
        </div>
        {/* box two */}
        <div className='flex justify-between gap-5'>
          <span className='text-5xl'>35</span>
          <span className=''>Trainers</span>
        </div>
        {/* box one */}
        <div className='flex justify-between gap-5'>
          <span className='text-5xl'>12</span>
          <span className=''>Locations</span>
        </div>
        {/* box one */}
        <div className='flex justify-between gap-5'>
          <span className='text-5xl'>VIP</span>
          <span className=''>Section for <br /> members</span>
        </div>
      </section>
    </div>
  );
}

export default InfoBar;
