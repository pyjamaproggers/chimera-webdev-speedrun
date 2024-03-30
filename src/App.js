import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Grey from './assets/Grey.jpeg'
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

    useEffect(() => {
        let frameId;

        const moveCursor = (e) => {
            const moveCircle = () => {
                setCursorPos((prevPos) => {
                    const distanceX = e.clientX - prevPos.x;
                    const distanceY = e.clientY - prevPos.y;

                    return {
                        x: prevPos.x + distanceX * 0.1,
                        y: prevPos.y + distanceY * 0.1,
                    };
                });

                frameId = requestAnimationFrame(moveCircle);
            };

            moveCircle();
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            cancelAnimationFrame(frameId);
        };
    }, []);

    useEffect(() => {
        window.document.ready(function () {
            document.getElementsByTagName("BODY")[0].mousewheel(function (e, delta) {
                this.scrollLeft -= (delta);
                e.preventDefault();
            });
        });
    }, [])

    return (
        <>
            <div className="cursor-follower" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}></div>
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
