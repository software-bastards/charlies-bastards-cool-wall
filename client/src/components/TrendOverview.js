import React, { Component } from "react";
import { connect } from "react-redux";
import TrendProgressBar from "./TrendProgressBar";
import "../stylesheets/TrendOverview.scss";
import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";

export class TrendOverview extends Component {
  render() {
    return (
      <div className="trendBar--wrapper">
        {this.props.combined_votes
          ? this.props.combined_votes.map((data, index) => (
              <div key={index} className="trendBar--content_wrapper">
                <div className="trendBar--content_name">
                  {" "}
                  {data.tech_list.name}{" "}
                </div>
                <div className="trendBar--progressbar">
                  <TrendProgressBar
                    percentUncool={calculateProgressBarPercent(
                      data,
                      data.uncool_votes
                    )}
                    percentCool={calculateProgressBarPercent(
                      data,
                      data.cool_votes
                    )}
                    percentSubZero={calculateProgressBarPercent(
                      data,
                      data.subzero_votes
                    )}
                  />
                </div>
              </div>
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    combined_votes: state.votes.votes,
  };
};

export default connect(mapStateToProps)(TrendOverview);
