import React, { useEffect, useState } from 'react';
import './App.css';
import Comp1 from './components/comp1/comp1';
import Comp2 from './components/comp2/comp2';
import Comp3 from './components/comp3/comp3';
import Comp4 from './components/comp4/comp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/header/header';

AOS.init();

function App() {
    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            const cursorStyle = window.getComputedStyle(e.target).cursor;
            setIsPointer(cursorStyle === 'pointer');

            const moveCircle = () => {
                setCursorPos((prevPos) => {
                    const distanceX = e.clientX - prevPos.x;
                    const distanceY = e.clientY - prevPos.y;
                    return {
                        x: prevPos.x + distanceX * 0.1,
                        y: prevPos.y + distanceY * 0.1,
                    };
                });
            };
            moveCircle();
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    useEffect(() => {
        const horizontalScroll = (e) => {
            e.preventDefault(); 
            window.scrollBy({
                left: e.deltaY * 1.5, 
                behavior: 'smooth' 
            });
        };

        window.addEventListener('wheel', horizontalScroll);

        // return () => window.removeEventListener('wheel', horizontalScroll);
    }, []);

    return (
        <>
            <div className={`cursor-follower ${isPointer ? 'pointer' : ''}`} style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}></div>
            <div className="grandparent">
                <div className="parent">
                    <Header />
                    <Comp1 />
                    <Comp2 />
                    <Comp3 />
                    <Comp4 />
                </div>
            </div>
        </>
    );
}

export default App;
