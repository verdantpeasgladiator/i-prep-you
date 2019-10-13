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
    let { value } = this.state;

    return (
      <form>
        <label htmlFor={"resume"}>Enter Your Resume Here:</label>
        <input
          type="text"
          name={value}
          id={value}
          placeholder={"Paste your resume"}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
