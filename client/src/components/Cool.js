import React from "react";
import ProgressBar from "./ProgressBar";
import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";
import CoolIcon from "../images/cool.svg";
import "../stylesheets/Cool.scss";
const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";
function Cool({ cool_technology }) {
  return (
    <div data-test="component-cool" className="cool-wrapper">
      <div className="cool--head">
        <img className="cool--icon" src={CoolIcon} alt="Logo Cool" />
        <h1 className="cool--h1">Cool</h1>
      </div>
      <h1>cool</h1>
      {cool_technology.map((technology, index) => (
        <div key={index} data-test="technology-section">
          {technology.tech_list.name}
          <ProgressBar
            percent={calculateProgressBarPercent(
              technology,
              technology.uncool_votes
            )}
            color={yellow}
            name="UnCool"
            data-test="uncool-progressbar"
          />
          <ProgressBar
            percent={calculateProgressBarPercent(
              technology,
              technology.cool_votes
            )}
            color={red}
            name="Cool"
            data-test="cool-progressbar"
          />
          <ProgressBar
            percent={calculateProgressBarPercent(
              technology,
              technology.subzero_votes
            )}
            color={blue}
            name="SubZero"
            data-test="subzero-progressbar"
          />
        </div>
      ))}
    </div>
  );
}
export default Cool;
