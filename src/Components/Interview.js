import React from "react";
import MyWebcam from './webcam';
const SpeechSDK = require("microsoft-cognitiveservices-speech-sdk");
const subscriptionKey = "cfd23720fb3c4a5d9c28649d946259a1";
const serviceRegion = "westus"; // e.g., "westus"

let recognizer;

export default class Interview extends React.Component {
    constructor() {
      super()
      this.state = {
        isRecording: false,
        textOutput: ''
      }
        var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
        speechConfig.speechRecognitionLanguage = "en-US";
        var audioConfig  = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
        recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
    }

    startInterview () {
        this.switchRecording()
        this.speechSDK.bind(this)
    }

    stopInterview () {
        // this.switchRecording()
        this.stopSpeechSDK.bind(this)
    }

    switchRecording () {
      this.setState({
        isRecording: !this.state.isRecording
      })
    }

    stopSpeechSDK (){
        recognizer.stopContinuousRecognitionAsync(
            () => {
                // console.log(result);
                this.speechSDK()
                // this.setState({
                //   textOutput: result.text
                // })
                recognizer.close();
                recognizer = undefined;
              },
              (err) => {
                console.log(err);
                recognizer.close();
                recognizer = undefined;
              });    
    }

    speechSDK () {
      // if we got an authorization token, use the token. Otherwise use the provided subscription key
       recognizer.startContinuousRecognitionAsync(
         () => {
        //    console.log(result);
        //    this.setState({
        //      textOutput: result.text
        //    })
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
             <button onClick={this.stopInterview.bind(this)}>Stop Interview</button>
             <MyWebcam />
             <button onClick={this.stopSpeechSDK.bind(this)}>Next Question</button>
             <p>{ this.state.textOutput }</p>
          </div>
          );
      } else {
        return (
          <div>
             <button onClick={this.startInterview.bind(this)}>Start Interview</button>
          </div>
        );
      }
    }
  }
