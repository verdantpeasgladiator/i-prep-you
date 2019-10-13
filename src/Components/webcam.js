import React from "react";
import Webcam from "react-webcam";

export default class MyWebcam extends React.Component {
    setRef = webcam => {
      this.webcam = webcam;
    };
  
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
    };
  
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
  
      return (
        <div>
          <Webcam
            audio={false}
            height={500}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={500}
            videoConstraints={videoConstraints}
          />
          <button onClick={this.capture}>Capture photo</button>
        </div>
      );
    }
  }