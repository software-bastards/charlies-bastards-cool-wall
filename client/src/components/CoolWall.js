import React, { Component } from "react";
import TechVote from "./TechVote";
import DisplayTrend from "./DisplayTrend";
import Logo from "../images/logo.svg";
import "../stylesheets/global.scss";
import "../stylesheets/global.css";
import "../stylesheets/CoolWall.scss";
<<<<<<< HEAD
=======
import Logo from "../images/logo.svg";
<<<<<<< HEAD
>>>>>>> feature-subzero
=======
import DisplayTrend from './DisplayTrend';
>>>>>>> 4aabe3c0a9c6a71a071a75fe0fe4b8dcf794ae2d

class CoolWall extends Component {
  render() {
    return (
      <div data-test="component-coolwall" className="coolwall--wrapper">
        <div className="coolwall--left">
          <div className="coolwall--left_white">
            <img className="coolwall--logo" src={Logo} alt="Logo CoolWall" />
            <p className="coolwall--copyright">@softwarebastards</p>
          </div>
          <div className="coolwall--left_grey"></div>
        </div>
        <div className="coolwall--right">
          <div className="coolwall--right_top">
            <p className="right--top_p">
              Vote and submit what's hot and what's not!
            </p>
          </div>
          <div className="coolwall--right_wrapper">
            <div className="coolwall--techvote_wrapper">
              <TechVote data-test="techvote-component" />
            </div>
<<<<<<< HEAD
            <div
              className="coolwall--displaytrend"
              data-test="displaytrend-component"
            >
              <DisplayTrend />
            </div>
=======
            <DisplayTrend />
>>>>>>> 4aabe3c0a9c6a71a071a75fe0fe4b8dcf794ae2d
          </div>
        </div>
      </div>
    );
  }
}

export default CoolWall;
