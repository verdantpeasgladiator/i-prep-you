import React from "react";
import "./App.css";
import ScoreCard from "./Components/ScoreCard.js";
import MyWebcam from "./Components/Webcam";
import Feedback from "./Components/Feedback";
import Interview from "./Components/Interview";
import Navbar from "./Components/Navbar";
import { connect } from "react-redux";
import { setPage } from "./Actions/index";

class App extends React.Component {
  render() {
    return this.props.isHome ? (
      <div className="App">
        <Feedback />
        <Interview>
          <MyWebcam />
        </Interview>
        TODO: split in to pages
      </div>
    ) : (
      <div className="App">
        <Navbar />
        <div className="Content">
          <div className="Left">
            <MyWebcam />
            <button onClick={()=>this.props.setPage(true)}>Back</button>
          </div>
          <div className="Right">
            <ScoreCard />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isHome: state.pageState.isHome
  };
};

export default connect(mapStateToProps, { setPage })(App);
