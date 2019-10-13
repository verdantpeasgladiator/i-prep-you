import React from "react";
import firebase from 'firebase';

let storageRef;

export default class BasicApiCall extends React.Component {

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
      // databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
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
      returnFaceId: "true",
      returnFaceLandmarks: "false",
      returnFaceAttributes:
        "age,gender,headPose,smile,facialHair,glasses,emotion," +
        "hair,makeup,occlusion,accessories,blur,exposure,noise"
    };

    // const imageUrl =  'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';
    const imageUrl = this.state.url

    // Perform the REST API call.
    fetch(uriBase, {
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
      this.setState({ imageData: data })
    })
    .catch(console.log)
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <input type="file" onChange={ (e) => this.uploadFirebase(e.target.files[0]) } alt="hi" />
        <button onClick={ console.log('hi') }> hi </button>
      </div>
    )
  }

  async uploadFirebase(file) {
    console.log(file)
    // Upload file and metadata to the object 'images/mountains.jpg'
    var ref = storageRef.ref(file.name);
    await ref.put(file, {'content-type': 'image/jpg'});
    const uri = await ref.getDownloadURL();
    console.log(uri)
    this.setState({
      url: uri
    })
    this.submit()
  }

}
