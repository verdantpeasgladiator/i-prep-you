import React from 'react';
import { connect } from 'react-redux';

class Feedback extends React.Component {
  render() {
    if (this.props.emotion)
    return (
      // <p>{JSON.stringify(this.props.emotion)}</p>
      <div>
      {
        Object.entries(this.props.emotion).map(([k, v]) => (
          <p key={k}>{k + v}</p>
        ))
      }
      </div>
    )
    else {
      return(
        <div></div>
      )
    }
  }

}

const mapStateToProps = (state) => {
  console.log("webcam reducer emotion is:", state.webcamReducer);
  return {
    emotion: state.webcamReducer.emotion
  };
};

export default connect(mapStateToProps)(Feedback);
