import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreCard from './Components/ScoreCard.js';
import MyWebcam from './Components/webcam';
import BasicApiCall from "./Components/BasicApiCall";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ScoreCard/>
        <BasicApiCall />
        <MyWebcam />
      </header>
    </div>
  );
}

export default App;
