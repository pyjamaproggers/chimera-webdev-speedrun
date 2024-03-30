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
          <h2 ref={lorumRef}>Lorum</h2>
          <div style={{ marginLeft: `${lorumWidth}px` }}>
            <h2>Ipsum</h2>
          </div>
        </div>
        <div className="indent with-lines">
          <p><span className="arrow">{'>'}</span> Row1</p>
          <p><span className="arrow">{'>'}</span> Row2</p>
          <p><span className="arrow">{'>'}</span> Row3</p>
        </div>
      </div>
    </div>
  );
}

export default Comp3;
