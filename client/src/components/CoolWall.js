import React, { Component } from "react";
import TechVote from "./TechVote";
import "../stylesheets/global.scss";
import "../stylesheets/global.css";
import "../stylesheets/CoolWall.scss";
import Logo from "../images/logo.svg";
import DisplayTrend from './DisplayTrend';

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
            <DisplayTrend />
          </div>
        </div>
      </div>
    );
  }
}

export default CoolWall;
