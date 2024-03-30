import React from 'react';
import './comp1.css'; 

function Comp1() {
  return (
    <div className="component1">
      <div className='text-section'>
        <p className='small-text'>Lorem, ipsum dolor</p>
        <p className='large-text orange-text' data-aos='fade-up' style={{fontStyle: 'italic'}}>Lorem</p>
        <p className='large-text orange-text' data-aos='fade-up' style={{fontStyle: 'italic'}}>Ipsum</p>
        <div className='aligned-texts'>
          <span className='small-text'>Lorem</span>
          <span className='end-text'>Lorem ipsum dolor sit.</span>
        </div>
      </div>
      <p className='scroll-hint'>Scroll to see more :</p>
    </div>
  );
}

export default Comp1;
