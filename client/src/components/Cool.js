import React from "react";
import ProgressBar from "./ProgressBar";
import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";
import CoolIcon from "../images/cool.svg";
import { gettingTechIcon } from "../helper/gettingTechIcon";
import "../stylesheets/Cool.scss";

const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";

function Cool({ cool_technology, tech_list }) {
  return (
    <div data-test="component-cool" className="cool-wrapper">
      <div className="cool--head">
        <img className="cool--icon" src={CoolIcon} alt="Logo Cool" />
        <h1 className="cool--h1">Cool</h1>
      </div>
      {cool_technology.map((technology, index) => (
        <div
          className="cool--technology_wrap"
          data-test="technology-section"
          key={index}
        >
          <div className="cool--logo_wrap">
            {/* <div
              className="vue--logo"
              dangerouslySetInnerHTML={{
                __html: gettingTechIcon(tech_list, technology.tech_list.name),
              }}
            ></div> */}
            <div className="vue--logo">
              <img src={tech_list[0].svgpath} alt="logo" />
            </div>
          </div>
          <div className="cool--technology_flex">
            <h3 className="cool--technology_name">
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
export default Cool;
