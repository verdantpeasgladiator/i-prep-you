import React from "react";
import MyWebcam from './webcam';

export default class Interview extends React.Component {
    constructor() {
      super()
      this.state = {
        isRecording: false
      } 
    }

    switchRecording () {
      this.setState({
        isRecording: !this.state.isRecording
      }) 
    }
  
    render() {
      if (this.state.isRecording){
        return (
          <div>
             <button onClick={this.switchRecording.bind(this)}>Stop Interview</button>
             <MyWebcam></MyWebcam>
          </div>          
          ); 
      } else {
        return (
          <div>
             <button onClick={this.switchRecording.bind(this)}>Start Interview</button>
          </div>
        );
      }
    }
  }
