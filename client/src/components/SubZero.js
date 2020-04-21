import React from "react";
import ProgressBar from "./ProgressBar";
import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";
import SubZeroIcon from "../images/subzero.svg";
import "../stylesheets/SubZero.scss";
import VueLogo from "../images/vue.svg";

const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";

function SubZero({ subzero_technology }) {
  return (
    <div data-test="component-subzero" className="subzero--wrapper">
      <div className="subzero--head">
        <img className="subzero--icon" src={SubZeroIcon} alt="Icon SubZero" />
        <h1 className="subzero--h1">SubZero</h1>
      </div>
      {subzero_technology.map((technology, index) => (
        <div
          className="subzero--technology_wrap"
          data-test="technology-section"
          key={index}
        >
          <div className="subzero--logo_wrap">
            <img className="vue--logo" src={VueLogo} alt="Vue Logo" />
          </div>
          <div className="subzero--technology_flex">
            <h3 className="subzero--technology_name">
              {technology.tech_list.name}
            </h3>
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
        </div>
      ))}
    </div>
  );
}

export default SubZero;
