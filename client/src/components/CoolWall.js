import React, { Component } from "react";
import TechVote from "./TechVote";
import DisplayTrend from "./DisplayTrend";
import Logo from "../images/logo.svg";
import "../stylesheets/global.scss";

import "../stylesheets/CoolWall.scss";

class CoolWall extends Component {
  render() {
    return (
      <div data-test="component-coolwall" className="coolwall--wrapper">
        <div className="coolwall--left">
          <div className="coolwall--left_white">
            <img className="coolwall--logo" src={Logo} alt="Logo CoolWall" />
          </div>
          <div className="coolwall--left_grey"></div>
          <p className="coolwall--copyright">@softwarebastards</p>
        </div>
        <div className="coolwall--right">
          <div className="coolwall--right_top"></div>
          <div className="coolwall--right_wrapper">
            <p className="right--top_p">
              Vote and submit what’s hot and what’s not!
            </p>
            <div className="coolwall--techvote_wrapper">
              <TechVote data-test="techvote-component" />
            </div>
            <div
              className="coolwall--displaytrend"
              data-test="displaytrend-component"
            >
              <DisplayTrend />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoolWall;
