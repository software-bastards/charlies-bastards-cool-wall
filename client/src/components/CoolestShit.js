import React from "react";
import ProgressBar from "./ProgressBar";
import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";
import "../stylesheets/SubZero.scss";
import "../stylesheets/CoolestShit.scss";
import { connect } from "react-redux";
import { gettingTechIcon } from "../helper/gettingTechIcon";

const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";

function CoolestShit({ coolestshit_technology, tech_list }) {
  return (
    <div data-test="component-coolest-shit" className="coolestshit--wrapper">
      <div className="coolestshit--logo_wrap">
        {tech_list ? (
          <img
            className="vue--logo"
            src={`http://localhost:5000/${gettingTechIcon(
              tech_list,
              coolestshit_technology.tech_list.name
            )}`}
            alt="Vue Logo"
          />
        ) : null}
      </div>

      <div className="coolestshit--technology_flex">
        <h3 className="coolestshit--technology_name">
          {coolestshit_technology.tech_list.name}
        </h3>
        <ProgressBar
          percent={calculateProgressBarPercent(
            coolestshit_technology,
            coolestshit_technology.uncool_votes
          )}
          color={yellow}
          name="UnCool"
          data-test="uncool-progressbar"
        />
        <ProgressBar
          percent={calculateProgressBarPercent(
            coolestshit_technology,
            coolestshit_technology.cool_votes
          )}
          color={red}
          name="Cool"
          data-test="cool-progressbar"
        />
        <ProgressBar
          percent={calculateProgressBarPercent(
            coolestshit_technology,
            coolestshit_technology.subzero_votes
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
