import logo from './logo.svg';
import './App.css';
import React from 'react';
import Grey from './assets/Grey.jpeg'
import Comp1 from './components/comp1/comp1';
import Comp2 from './components/comp2/comp2';

function App() {

    return (
        <>
            <div className="grandparent">
                <div className="parent">
                    <Comp1/>
                    <Comp2/>
                </div>
            </div>
        </>
    );
}

export default App;
