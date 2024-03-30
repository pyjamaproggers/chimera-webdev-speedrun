import React, { useRef, useState, useEffect } from 'react';
import './comp3.css';

function Comp3() {
  const lorumRef = useRef(null); 
  const [lorumWidth, setLorumWidth] = useState(0); 

  useEffect(() => {
    if (lorumRef.current) {
      setLorumWidth(lorumRef.current.offsetWidth); 
    }
  }, []);

  return (
    <div className="component3">
      <div className="content">
        <div className="header-inline">
          <h2 ref={lorumRef} style={{color: 'orange', lineHeight: '1'}}>Lorum</h2>
          <div style={{ marginLeft: `${lorumWidth}px`, color: 'orange', lineHeight: '1' }}>
            <h2>Ipsum</h2>
          </div>
        </div>
        <div className="indent with-lines">
          <div className='each-row'>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp3;
