import React from 'react';
import { connect } from 'react-redux';
import { getSelected } from '../Actions/index.js';

class ScoreCard extends React.Component {
   constructor() {
     super();
     this.state = {
       questionNo: 1,
     }
   }

  render() {
    let selectedQ = this.props.getSelected(this.state.questionNo);
    return (
      <div className="scoreCard">
        <h1>
          Question {selectedQ.questionNo}
          {selectedQ.criteria.map(criterion => (
            <p key={criterion.id}> {criterion.text}</p>
          ))}
        </h1>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    questions: state.questions
  };
};

export default connect(mapStateToProps, { getSelected })(ScoreCard);
