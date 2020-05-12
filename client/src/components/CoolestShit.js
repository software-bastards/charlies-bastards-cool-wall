import React, { Component } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD

import "../stylesheets/SubZero.scss";

export class CoolestShit extends Component {
  state = {
    coolestshit: {},
  };

  componentDidMount = () => {
    if (this.props.subzero_technology) {
      let max = this.props.subzero_technology.reduce(function (prev, current) {
        return prev.subzero_votes > current.subzero_votes ? prev : current;
      });
      console.log(max);
      let newState = Object.assign({}, this.state);
      newState.coolestshit = max;
      this.setState(newState);
      if (this.state.coolestshit) {
        console.log(this.state.coolestshit);
      }
    }
  };

  render() {
    return (
      <div
        data-test="component-coolest-shit"
        className="coolestshit--wrapper"
      ></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    combined_votes: state.votes.votes,
  };
};

export default connect(mapStateToProps)(CoolestShit);

/*
  <ProgressBar
                percent={calculateProgressBarPercent(technology.uncool_votes)}
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
              */

/*  {this.state.coolestshit ? (
              <div
                className="subzero--technology_wrap"
                data-test="technology-section"
              >
                <div className="subzero--logo_wrap">
                  <img className="vue--logo" src={VueLogo} alt="Vue Logo" />
                </div>
                <div className="subzero--technology_flex">
                  <h3 className="subzero--technology_name">
                    {this.state.coolestshit.tech_list.name}
                  </h3>
                </div>
              </div>
            ) : null} */
=======
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

export default CoolestShit;
>>>>>>> aae8496189779b7bd41e026945e314d79f3d02e3
