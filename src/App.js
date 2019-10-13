import React from 'react';
import './App.css';
import ScoreCard from './Components/ScoreCard.js';
import MyWebcam from './Components/webcam';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Yeet
        </p>
        <ScoreCard/>
        <MyWebcam />
      </header>
    </div>
  );
}

export default App;
