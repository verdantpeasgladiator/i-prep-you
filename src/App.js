import React from 'react';
import './App.css';
import ScoreCard from './Components/ScoreCard.js';
import MyWebcam from './Components/webcam';
import Feedback from './Components/Feedback';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Yeet
        </p>
        <ScoreCard/>
        <MyWebcam />
        <Feedback />
      </header>
    </div>
  );
}

export default App;
