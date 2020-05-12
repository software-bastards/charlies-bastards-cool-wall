import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";
import "../stylesheets/SubZero.scss";
import "../stylesheets/CoolestShit.scss";
import VueLogo from "../images/vue.svg";
import {
  calculateProgressBarCoolestShitSubzero,
  calculateProgressBarCoolestShitCool,
  calculateProgressBarCoolestShitUncool,
} from "../helper/calculateProgressBarCoolestShit";

const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";

function CoolestShit({ coolestshit_technology }) {
  return (
    <div data-test="component-coolest-shit" className="coolestshit--wrapper">
      <div className="coolestshit--logo_wrap">
        <img className="vue--logo" src={VueLogo} alt="Vue Logo" />
      </div>
      <div className="coolestshit--technology_flex">
        <h3 className="coolestshit--technology_name">
          {coolestshit_technology.tech_list.name}
        </h3>
        <ProgressBar
          percent={calculateProgressBarCoolestShitUncool(
            coolestshit_technology
          )}
          color={yellow}
          name="UnCool"
          data-test="uncool-progressbar"
        />
        <ProgressBar
          percent={calculateProgressBarCoolestShitCool(coolestshit_technology)}
          color={red}
          name="Cool"
          data-test="cool-progressbar"
        />
        <ProgressBar
          percent={calculateProgressBarCoolestShitSubzero(
            coolestshit_technology
          )}
          color={blue}
          name="SubZero"
          data-test="subzero-progressbar"
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        combined_votes: state.votes.votes,
    };
};

export default connect(mapStateToProps)(CoolestShit);
