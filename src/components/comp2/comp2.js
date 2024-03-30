import React from 'react';
import './comp2.css';

function Comp2() {
  return (
    <div className="component2">
        <div className='component2content'>
      <h4 data-aos="fade-down">Lorem Ipsum dolor</h4>
      <p style={{marginBottom: '60px', fontSize: '20px'}}>Lorem Ipsum dolor paragraph Lorem Ipsum dolor paragraph Lorem Ipsum dolor paragraph
         Lorem Ipsum dolor paragraph Lorem Ipsum dolor paragraph Lorem Ipsum dolor paragraph
         Lorem Ipsum dolor paragraph Lorem Ipsum dolor paragraph Lorem Ipsum dolor paragraph
         Lorem Ipsum</p>
      <div className="right-aligned-content">
        <p className="right-aligned-text">Lorem ipsum sit amet</p>
        <button className="rounded-button"><span>Lorem Ipsum →</span></button>
      </div>
      </div>
    </div>
  );
}

export default Comp2;
