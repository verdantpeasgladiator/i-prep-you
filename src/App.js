import React from "react";
import "./App.css";
import ScoreCard from "./Components/ScoreCard.js";
import Feedback from "./Components/Feedback";
import Interview from "./Components/Interview";
import Navbar from "./Components/Navbar";
import FileUpload from "./Components/FileUpload";
import { connect } from "react-redux";
import { setPage } from "./Actions/index";

class App extends React.Component {
  render() {
    return this.props.isHome ? (
      <div className="App">
        <Navbar />
        <div className="Content">
          <div className="Left">
            <Feedback />
            <Interview />
            <button onClick={() => this.props.setPage(false)}>Back</button>
          </div>
          <div className="Right">
            <ScoreCard />
          </div>
        </div>
      </div>
    ) : (
      <div className="App">
        <Navbar />
        <FileUpload />
      </div>
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
  { setPage }
)(App);
