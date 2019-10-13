import React from "react";
import Webcam from "react-webcam";
import './Webcam.css';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { setEmotion } from '../Actions/index.js';

let storageRef;

class MyWebcam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      imageData: ''
    };
  }

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAkU9yo0vquPx7mCkQgh4QQ-gRMPq9r_vE",
      authDomain: "hallowed-span-255722.firebaseapp.com",
      storageBucket: "hallowed-span-255722.appspot.com"
    };

    firebase.initializeApp(config);
    storageRef = firebase.storage();

  }

  submit() {
    console.log('SUBMITTING')
    // Replace <Subscription Key> with your valid subscription key.
    const subscriptionKey = "38c1d41199794d2baf65b58e453b762e";
    const uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";

    // Request parameters.
    const params = {
      returnFaceAttributes: "age,gender,headPose,smile,glasses,emotion"
    };

    const imageUrl = this.state.url

    // Perform the REST API call.
    fetch(uriBase + '?returnFaceAttributes=age,gender,headPose,smile,glasses,emotion', {
      method: 'POST',
      qs: params,
      headers: new Headers({
       'Ocp-Apim-Subscription-Key' : subscriptionKey,
       'Content-Type': 'application/json'
      }),
      body: '{"url": "' + imageUrl + '"}',
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data[0].faceAttributes.emotion)
      let emotion = data[0].faceAttributes.emotion;
      this.setState({ imageData: data })
      let topEmotion = Object.keys(emotion).reduce((a, b) => emotion[a] > emotion[b] ? a : b)
      this.props.setEmotion(topEmotion)
    })
    .catch(console.log)
  }

  async uploadFirebase(file) {
    console.log(file)
    var ref = storageRef.ref(Math.floor((Math.random() * 1000) + 1) + '.png');
    await ref.put(file, {'content-type': 'image/png'});
    const uri = await ref.getDownloadURL();
    console.log(uri)
    this.setState({
      url: uri
    })
    this.submit()
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrcURL = this.webcam.getScreenshot();
    fetch(imageSrcURL)
    .then(res => res.blob())
    .then(blob => {
      this.uploadFirebase(blob)
    })
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
          screenshotFormat="image/png"
          videoConstraints={videoConstraints}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    emotion: state.webcamReducer.emotion
  };
};

export default connect(mapStateToProps, { setEmotion })(MyWebcam);
