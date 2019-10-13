import React from 'react';
import './App.css';
import ScoreCard from './Components/ScoreCard.js';
import MyWebcam from './Components/Webcam';
import Feedback from './Components/Feedback';
import Interview from './Components/Interview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScoreCard />
        <Feedback />
        <Interview>
          <MyWebcam />
        </Interview>
      </header>
    </div>
  );
}

export default App;
