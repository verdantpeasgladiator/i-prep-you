import React from "react";
import { connect } from "react-redux";
import { getSelected } from "../Actions/index.js";

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
        {criteria.map(
          criterion => {
            totalScore += criterion.score;
            return (
              <div>
                <p key={criterion.id}> {criterion.text}: {criterion.score}/10</p>
              </div>
            )
          }
        )}
        <p> Total: {totalScore}/{10*criteria.length} </p>
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
