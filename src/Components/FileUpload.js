import React from "react";
import { connect } from "react-redux";
import { setPage, setJobDesc } from "../Actions/index";

class FileUpload extends React.Component {
  handleChange = e => {
    this.setState({ textInput: e.target.value });
  };

  handleSubmit = e => {
    var questions = {
      standard: [
        "Tell me about yourself…",
        "Introduce yourself and why you want to work here"
      ],
      independent: [
        "Can you tell us about a time you failed?",
        "Tell me about some of the more interesting or difficult problems you've been working on the past few years."
      ],
      ownership: [
        "Tell me about the project you are most proud of, and what your contribution was.",
        "Tell me about the project you are most proud of, and what your contribution was."
      ],
      autonomously: [
        "Can you tell us about a time you failed, and what you did to turn things around?",
        "When you don’t know the answer to something, what is the first thing that you do?"
      ],
      self: ["What are your greatest strengths?", "What are your weaknesses?"],
      team: [
        "Can you tell me about a time when things didn’t go the way you wanted at work, such as a project that failed or being passed over for a promotion?",
        "If I were to ask your last set of coworkers to describe you, what do you think they'd say?"
      ],
      teamwork: [
        "Can you tell me about a time when things didn’t go the way you wanted at work, such as a project that failed or being passed over for a promotion?",
        "If I were to ask your last set of coworkers to describe you, what do you think they'd say?"
      ],
      tech: [
        "How do you keep your technology skills current?",
        "Give an example of where you have applied your technical knowledge in a practical way."
      ],
      technology: [
        "Tell me about a tech project you’ve worked on in your spare time.",
        "Tell me about a tech project you’ve worked on in your spare time."
      ],
      technical: [
        "What do you do to maintain your technical certifications?",
        "How would you rate your key competencies for this job?"
      ]
    };

    // while (tracker !== 0) {
    //   for (const k of questions) {
    //     console.log(this.state.textInput.includes(k));
    //     console.log(k);
    // console.log(questions.k[0]);
    //     let index = Math.floor(Math.random() * questions.get(k).length) + 1;
    //     question[tracker] = questions.get(k)[index];
    //     tracker--;
    //   }
    // }
    let question = "";
    e.preventDefault();
    Object.entries(questions).forEach(([key, value]) => {
      if (this.state.textInput.includes(key)) {
        let index = Math.random() > 0.5 ? 0 : 1;
        question = questions[key][index];
      }
      console.log(question);
    });

    // let question = parse(this.state.textInput);
    this.props.setJobDesc(question);
    this.props.setPage(true);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <p>Enter your job description here:</p> <br />
        <textarea
          cols="120"
          rows="5"
          placeholder={"Paste your job description"}
          onChange={this.handleChange}
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isHome: state.pageState.isHome
  };
};

export default connect(
  mapStateToProps,
  { setPage, setJobDesc }
)(FileUpload);
