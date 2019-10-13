import React from 'react';
import './App.css';
import ScoreCard from './Components/ScoreCard.js';
import MyWebcam from './Components/webcam';
import Feedback from './Components/Feedback';
import Interview from './Components/Interview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Yeet
        </p>
        <ScoreCard/>
        <Feedback />
        <Interview>
          <MyWebcam />
        </Interview>
      </header>
    </div>
  );
}

export default App;
