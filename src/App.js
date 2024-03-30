import logo from './logo.svg';
import './App.css';
import React from 'react';
import Grey from './assets/Grey.jpeg'
import Comp1 from './components/comp1/comp1';
import Comp2 from './components/comp2/comp2';
import Comp3 from './components/comp3/comp3';

function App() {

    return (
        <>
            <div className="grandparent">
                <div className="parent">
                    <Comp1/>
                    <Comp2/>
                    <Comp3/>
                </div>
            </div>
        </>
    );
}

export default App;
