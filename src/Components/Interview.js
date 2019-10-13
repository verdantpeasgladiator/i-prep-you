import React from "react";
import MyWebcam from './Webcam';
import "./Interview.css";
const SpeechSDK = require("microsoft-cognitiveservices-speech-sdk");
const subscriptionKey = "cfd23720fb3c4a5d9c28649d946259a1";
const serviceRegion = "westus"; // e.g., "westus"

let answerPerQuestion = ''
let answers = []
let wordCount = []
let startTime;
let fillerWords = 0;

export default class Interview extends React.Component {
    constructor() {
      super()
      this.state = {
        isRecording: false,
        nextQuestionClicked: false,
        textOutput: ''
      }
    }

    startRecording () {
      startTime = new Date()
      this.setState({
        isRecording: true
      })
      this.speechSDK()
    }

    stopRecording () {
      this.setState({
        isRecording: false
      })
      console.log("# of Filler Words: " + fillerWords)
    }

    nextQuestion(){
        answers.push(answerPerQuestion)
        console.log(answers)
        answerPerQuestion = ''

        //calculation for words/minute for each question
        for (var i = 0; i < answers.length; i++){
          wordCount = wordCount.concat(answers[i].split(" "))
        }
        var currTime = new Date()
        var timeSpan = Math.abs(currTime - startTime) / 1000
        console.log("Word Count: " + wordCount.length)
        console.log("WPM: " + ((wordCount.length/ timeSpan) * 60 ))


        //total tracker for filler words
        for (var j = 0; j < wordCount.length - 1; j++){
          if (wordCount[j].includes("Uh.")){
            fillerWords++
          }
          if (wordCount[j].includes("Um.")){
            fillerWords++
          }
          if (wordCount[j] === "like" && wordCount[j + 1] === "like"){
            fillerWords++
          }
        }

        wordCount = []
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
           answerPerQuestion += result.text
           if (this.state.isRecording){
            this.speechSDK()
           } else {
            recognizer.close();
            recognizer = undefined;
           }
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
             <MyWebcam />
             <button onClick={this.nextQuestion.bind(this)}>Next Question</button>
             <p>{ this.state.textOutput }</p>
          </div>
          );
      } else {
        return (
          <div>
             <button onClick={this.startRecording.bind(this)}>Start Interview</button>
          </div>
        );
      }
  }
}
