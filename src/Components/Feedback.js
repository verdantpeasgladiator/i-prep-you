import React from 'react';
import { connect } from 'react-redux';

class Feedback extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <p>{this.props.emotion}</p>
    )
  }

}

const mapStateToProps = (state) => {
  console.log("webcam reducer emotion is:", state.webcamReducer);
  return {
    emotion: state.webcamReducer.emotion
  };
};

export default connect(mapStateToProps)(Feedback);
