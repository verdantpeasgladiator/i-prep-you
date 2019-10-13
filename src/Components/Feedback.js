import React from 'react';
import { connect } from 'react-redux';

class Feedback extends React.Component {
  constructor(){
    super()
    this.state = {
      emotion: ''
    }
  }

  render() {
    console.log('EMOTION: ' + this.state.emotion)
    return (
      <p>{this.state.emotion}</p>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    emotion: state.webcamReducer.emotion
  };
};

export default connect(mapStateToProps)(Feedback);
