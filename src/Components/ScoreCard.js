import React from "react";
import { connect } from "react-redux";
import { getSelected } from "../Actions/index.js";
import './ScoreCard.css'

class ScoreCard extends React.Component {
  constructor() {
    super();
    this.state = {
      questionNo: 1
    };
  }

  render() {
    let selectedQ = this.props.getSelected(this.state.questionNo);
    let criteria = this.props.questions[selectedQ.questionNo - 1].criteria
    let totalScore = 0;
    return (
      <div className="scoreCard">
        <h1>Question {selectedQ.questionNo}</h1>
        <div className="container">
        {criteria.map(
          criterion => {
            totalScore += criterion.score;
            return (
              <div className="criterion">
                <p key={criterion.id}> {criterion.text}: </p>
                <p className="score">{criterion.score}/10</p>
              </div>
            )
          }
        )}
        </div>
        <h1 className="totalScore"> Total: {totalScore}/{10*criteria.length} </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questionsState.questions
  };
};

export default connect(
  mapStateToProps,
  { getSelected }
)(ScoreCard);
