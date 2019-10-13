import React from "react";
import "./App.css";
import ScoreCard from "./Components/ScoreCard.js";
import MyWebcam from "./Components/Webcam";
import Feedback from "./Components/Feedback";
import Interview from "./Components/Interview";
import Input from "./Components/FileUpload";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input />
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
