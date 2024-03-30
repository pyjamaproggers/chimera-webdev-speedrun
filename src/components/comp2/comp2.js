import React from 'react';
import './comp2.css';
import { MdArrowOutward } from "react-icons/md";

function Comp2() {
  const handleButtonClick = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

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
                <button className="rounded-button" onClick={handleButtonClick}>
                    <span>Lorem Ipsum <MdArrowOutward size={24} color="black" className="menu-navbar-bottomicon" /></span>
                </button>
            </div>
        </div>
    </div>
  );
}

export default Comp2;
