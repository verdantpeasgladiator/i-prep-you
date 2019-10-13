import React from "react";
import MyWebcam from './Webcam';
const SpeechSDK = require("microsoft-cognitiveservices-speech-sdk");
const subscriptionKey = "cfd23720fb3c4a5d9c28649d946259a1";
const serviceRegion = "westus"; // e.g., "westus"

export default class Interview extends React.Component {
    constructor() {
      super()
      this.state = {
        isRecording: false,
        textOutput: ''
      }
    }

    switchRecording () {
      this.setState({
        isRecording: !this.state.isRecording
      })
    }

    speechSDK () {
      // if we got an authorization token, use the token. Otherwise use the provided subscription key
       var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);

       speechConfig.speechRecognitionLanguage = "en-US";
       var audioConfig  = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
       var recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
       recognizer.recognizeOnceAsync(
         (result) => {
           console.log(result);
           this.setState({
             textOutput: result.text
           })
           recognizer.close();
           recognizer = undefined;
         },
         (err) => {
           console.log(err);
           recognizer.close();
           recognizer = undefined;
         });
    }

    render() {
      if (this.state.isRecording){
        return (
          <div>
             <button onClick={this.switchRecording.bind(this)}>Stop Interview</button>
             <MyWebcam />
             <button onClick={this.speechSDK.bind(this)}>Start Speech</button>
             <p>{ this.state.textOutput }</p>
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
