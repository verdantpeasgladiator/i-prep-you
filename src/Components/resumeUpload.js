import React, { Component } from "react";
import { render } from "react-dom";

export default class Input extends Component {
  state = { value: "" };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    // const { value } = this.state;

    return (
      <form>
        <label htmlFor={"resume"}>Enter Your Resume Here:</label>
        <input
          type="text"
          name="resume"
          id="resume"
          placeholder={"Paste your resume"}
        />
        <input type="submit" value="Submit" />
      </form>

      //   <div>
      //     <label htmlFor={"id"}>Enter Your Resume Here:</label>
      //     <input
      //       id={"id"}
      //       type={"text"}
      //       value={value}
      //       placeholder={"Paste your resume"}
      //       onChange={this.handleChange}
      //     />
      //     <br />
      //     <br />
      //     {/* My value: {value} */}
      //   </div>
    );
  }
}
