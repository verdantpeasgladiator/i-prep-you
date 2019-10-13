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
        <p>{ this.props.jobDesc[this.props.question] }</p>
      </div>
    )
    else {
      return(
        <p>{ this.props.jobDesc[this.props.question] }</p>
      )
    }
  }

}

const mapStateToProps = (state) => {
  return {
    emotion: state.webcamReducer.emotion,
    jobDesc: state.pageState.jobDesc,
    question: state.questionsState.question
  };
};

export default connect(mapStateToProps)(Feedback);
