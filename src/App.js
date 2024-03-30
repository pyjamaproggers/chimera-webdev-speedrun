import logo from './logo.svg';
import './App.css';
import React from 'react';
import Grey from './assets/Grey.jpeg'

function App() {

    return (
        <>
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
