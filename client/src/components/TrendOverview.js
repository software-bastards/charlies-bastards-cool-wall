import React, { Component } from "react";
import { connect } from "react-redux";
import handleFetchCombinedVotes from "../helper/handleFetchCombinedVotes";
import ProgressBar from "./ProgressBar";
import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";

const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";

export class TrendOverview extends Component {
  

  render() {
    return (
      <div>
        {/* {this.props.combined_votes? <p>{this.props.combined_votes.map((data) => <p > {data.tech_list.name} {data.subzero_votes} {data.cool_votes} {data.uncool_votes} 
                 
        </p>)} </p> : null} */}

        {this.props.combined_votes
          ? this.props.combined_votes.map((data, index) => (
              <div>
                {" "}
                ( {data.tech_list.name}{" "}
                <ProgressBar
                  percent={calculateProgressBarPercent(data, data.uncool_votes)}
                  color={yellow}
                  name="UnCool"
                />
                <ProgressBar
                  percent={calculateProgressBarPercent(data, data.cool_votes)}
                  color={red}
                  name="Cool"
                />
                <ProgressBar
                  percent={calculateProgressBarPercent(
                    data,
                    data.subzero_votes
                  )}
                  color={blue}
                  name="SubZero"
                />{" "}
                ){" "}
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
