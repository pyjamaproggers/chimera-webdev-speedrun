import logo from './logo.svg';
import './App.css';
import React from 'react';
import Grey from './assets/Grey.jpeg'
import Header from './components/header/header';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {

    return (
        <>
            <Header />
            <div className="grandparent">
                <div className="parent">
                    <img source={Grey} className="child"></img>
                    <img source={Grey} className="child"></img>
                    <img source={Grey} className="child"></img>
                    <img source={Grey} className="child"></img>
                    <img source={Grey} className="child"></img>
                </div>
            </div>
        </>
    );
}

export default App;
