import React from 'react';
import AddressBar from '../components/AddressBar';
import CtaAbout from '../components/CtaAbout';
import Charts from '../components/Charts';

const About = () => {
  return (
<section className='flex flex-col overflow-hidden'>
<AddressBar title={'About us'}/>
<div className="flex justify-between flex-col lg:flex-row">
    <CtaAbout/>
    <Charts/>
</div>
</section>
  );
}

export default About;
