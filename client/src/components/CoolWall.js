import React, { Component } from "react";
import TechVote from "./TechVote";
import DisplayTrend from "./DisplayTrend";
import Logo from "../images/logo.svg";
import "../stylesheets/global.scss";
import "../stylesheets/CoolWall.scss";
import Cool from "../images/cool.svg";
import UnCool from "../images/uncool.svg";
import SubZero from "../images/subzero.svg";

class CoolWall extends Component {
  render() {
    return (
      <div data-test="component-coolwall" className="coolwall--wrapper">
        <div className="coolwall--animation_wrap">
          <div className="coolwall--icons_wrap">
            <div className="coolwall--icon_col">
              <img
                className="coolwall--icon_img"
                src={UnCool}
                alt="uncool logo"
              />
            </div>
            <div className="coolwall--icon_col">
              <img className="coolwall--icon_img" src={Cool} alt="cool logo" />
            </div>
            <div className="coolwall--icon_col">
              <img
                className="coolwall--icon_img"
                src={SubZero}
                alt="subzero logo"
              />
            </div>
          </div>
        </div>
        <div className="coolwall--left">
          <div className="coolwall--left_white">
            <img className="coolwall--logo" src={Logo} alt="Logo CoolWall" />
          </div>
          <div className="coolwall--left_grey">
            <div className="coolwall--credentials">
              <p className="coolwall--copyright">@softwarebastards</p>
              <div className="coolwall--author">
                <p className="coolwall--author_p">Created by</p>
                <a className="coolwall--author_a" href="">
                  Elsabeth Desta
                </a>
                <a className="coolwall--author_a" href="">
                  Anuradhav Sivasubramanian
                </a>
                <a className="coolwall--author_a" href="">
                  Birte Spreuer
                </a>
              </div>
            </div>
          </div>
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
