import React from 'react';
import './comp4.css';

function Comp4() {
  return (
    <div className="component4">
      <p>Lorem ipsum dolor sit</p>
      <h1 className="extremely-large">LoremIpsum</h1>
      <p className="with-line">Lorem</p>
      <div className="with-arrows">
        <span>Lorem</span> <span className="arrow">{'->'}</span> 
        <span>Ipsum</span> <span className="arrow">{'->'}</span> 
        <span>Dolor</span> <span className="arrow">{'->'}</span> 
      </div>
    </div>
  );
}

export default Comp4;
