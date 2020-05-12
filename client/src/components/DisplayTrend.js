import React, { Component } from "react";
import handleFetchCombinedVotes from "../helper/handleFetchCombinedVotes";
import Cool from "./Cool";
import SubZero from "./SubZero";
import UnCool from "./UnCool";
import { connect } from "react-redux";
import "../stylesheets/DisplayTrend.scss";
import {
  resolveCoolVotes,
  resolveUnCoolVotes,
  resolveSubzeroVotes,
} from "../helper/resolveVotes";

export class DisplayTrend extends Component {
  componentDidMount = async () => {
    try {
      const results = await handleFetchCombinedVotes();
      this.props.dispatch({
        type: "FETCH_COMBINEDVOTES",
        votes: results,
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div data-test="component-displaytrend" className="displaytrend--wrapper">
        <div className="displaytrend--row">
          {this.props.combined_votes ? (
            <UnCool
              uncool_technology={resolveUnCoolVotes(this.props.combined_votes)}
              tech_list={this.props.tech_list}
              data-test="component-uncool"
            />
          ) : null}
        </div>
        <div className="displaytrend--row">
          {" "}
          {this.props.combined_votes ? (
            <Cool
              cool_technology={resolveCoolVotes(this.props.combined_votes)}
              tech_list={this.props.tech_list}
              data-test="component-cool"
            />
          ) : null}
        </div>
        <div className="displaytrend--row">
          {this.props.combined_votes ? (
            <SubZero
              subzero_technology={resolveSubzeroVotes(
                this.props.combined_votes
              )}
              tech_list={this.props.tech_list}
              data-test="component-subzero"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    combined_votes: state.votes.votes,
    tech_list: state.tech.list,
  };
};

export default connect(mapStateToProps)(DisplayTrend);
