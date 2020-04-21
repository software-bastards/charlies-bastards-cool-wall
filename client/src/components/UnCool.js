import React from "react";
import ProgressBar from "./ProgressBar";
import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";
import "../stylesheets/UnCool.scss";
import UncoolIcon from "../images/uncool.svg";
import VueLogo from "../images/vue.svg";

const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";

function UnCool({ uncool_technology }) {
  return (
    <div data-test="component-uncool" className="uncool--wrapper">
      <div className="uncool--head">
        <img className="uncool--icon" src={UncoolIcon} alt="Logo SubZero" />
        <h1 className="uncool--h1">UnCool</h1>
      </div>
      {uncool_technology.map((technology, index) => (
        <div
          className="uncool--technology_wrap"
          data-test="technology-section"
          key={index}
        >
          <div className="uncool--logo_wrap">
            <img className="vue--logo" src={VueLogo} alt="Vue Logo" />
          </div>
          <div className="uncool--technology_flex">
            <h3 className="uncool--technology_name">
            {technology.tech_list.name}
          </h3>
          <ProgressBar
            percent={calculateProgressBarPercent(
              technology,
              technology.uncool_votes
            )}
            color={yellow}
            name="Uncool"
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
        </div>
      ))}
      
    </div>
  );
}

export default UnCool;
