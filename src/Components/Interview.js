import React from "react";
import MyWebcam from './Webcam';
import { connect } from "react-redux";
import { calculateScore, pickQuestion } from "../Actions/index";
import "./Interview.css";
const SpeechSDK = require("microsoft-cognitiveservices-speech-sdk");
const subscriptionKey = "cfd23720fb3c4a5d9c28649d946259a1";
const serviceRegion = "westus"; // e.g., "westus"

let answerPerQuestion = ''
let answers = []
let wordCount = []
let startTime;
let fillerWords = 0;

class Interview extends React.Component {
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
        var WPM = (wordCount.length/ timeSpan) * 60
        console.log("WPM: " + WPM)


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

        let scoreObj = {}
        var numerator = Math.abs(WPM-115)
        var denominator = (WPM + 100)/2
        console.log("WPM BEFORE CALC: " + WPM)
        console.log("NUM: " + numerator)
        console.log("DENOM: " + denominator)
        scoreObj.speakingRate = 10 - (numerator/denominator) * 10
        scoreObj.fillerWords = Math.abs(8-fillerWords)+2
        let emotion = this.props.emotion
        console.log('emotion counter: ', this.props.emotionCounter)
        console.log('emotion happiness: ', emotion.happiness)
        console.log('emotion neutral: ', emotion.neutral)
        let faceScore = (emotion.happiness*2 + emotion.neutral - emotion.anger)/this.props.emotionCounter*3

        scoreObj.facial = faceScore

        this.props.calculateScore(scoreObj)

        this.props.pickQuestion(this.props.question + 1)

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

const mapStateToProps = state => {
  return {
    emotion: state.webcamReducer.emotion,
    emotionCounter: state.webcamReducer.emotionCounter,
    question: state.questionsState.question
  };
};

export default connect(
  mapStateToProps,
{ calculateScore, pickQuestion }
)(Interview);
