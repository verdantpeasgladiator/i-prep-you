import React from "react";
import { connect } from "react-redux";
import { getSelected } from "../Actions/index.js";
import './ScoreCard.css'

class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNo: 1
    };
  }

  onclick = (length) => {
    if (length - this.state.questionNo > 0) {
      this.setState({questionNo: this.state.questionNo + 1}, function () {
        console.log(this.state.questionNo);
      })
    }
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
        <button onClick={this.onclick.bind(this, this.props.questions.length)}>{this.state.questionNo < this.props.questions.length ? (<div>Next Question</div>) : (<div>Finish</div>) }</button>
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
