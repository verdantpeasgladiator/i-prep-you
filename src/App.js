<<<<<<< HEAD
import React from 'react';
import './App.css';
import ScoreCard from './Components/ScoreCard.js';
import MyWebcam from './Components/Webcam';
import Feedback from './Components/Feedback';
import Interview from './Components/Interview';
=======
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ScoreCard from "./Components/ScoreCard";
import MyWebcam from "./Components/webcam";
import BasicApiCall from "./Component/BasicApiCall";
import Navbar from "./Components/Navbar";
>>>>>>> basic page styling

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
<<<<<<< HEAD
        <ScoreCard />
        <Feedback />
        <Interview>
          <MyWebcam />
        </Interview>
=======
        <ScoreCard/>
        <BasicApiCall />
        <MyWebcam />
>>>>>>> hacky ol score card with scores ex deeee
      </header>
=======
      <Navbar />
      <div className="Content">
        <div className="Left">
          <MyWebcam />
          <BasicApiCall />
        </div>
        <div className="Right">
          <ScoreCard />
        </div>
      </div>
>>>>>>> basic page styling
    </div>
  );
}


export default App;
