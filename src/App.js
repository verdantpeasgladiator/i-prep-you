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
    </div>
  );
}

export default App;
