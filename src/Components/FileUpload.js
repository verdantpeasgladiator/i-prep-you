import React from "react";
import { connect } from "react-redux";
import { setPage, setJobDesc } from "../Actions/index";
import "./FileUpload.css";

class FileUpload extends React.Component {

  handleChange = e => {
    this.setState({ textInput: e.target.value });
    console.log(this.state)
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setJobDesc(this.state.textInput)
    this.props.setPage(true)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <p>Enter Job Desc Here:</p> <br/>
        <textarea
          cols="120"
          rows="5"
          placeholder={"Paste your job description"}
          onChange={this.handleChange}
        /> <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isHome: state.pageState.isHome,
  };
};

export default connect(
  mapStateToProps,
  { setPage, setJobDesc }
)(FileUpload);
