import React, { Component } from "react";
import handleFetchCombinedVotes from "../helper/handleFetchCombinedVotes";
import Cool from "./Cool";
import SubZero from "./SubZero";
import UnCool from "./UnCool";
import { connect } from "react-redux";
import "../stylesheets/DisplayTrend.scss";
import {connect} from "react-redux";

export class DisplayTrend extends Component {
  state = {
    combined_votes: [],
    cool_technology: [],
    uncool_technology: [],
    subzero_technology: [],
  };

  componentDidMount = async () => {
    try {
      const results = await handleFetchCombinedVotes();
<<<<<<< HEAD

      this.props.dispatch({
        type: "FETCH_COMBINEDVOTES",
        votes: results
=======
      this.props.dispatch({
        type: "FETCH_COMBINEDVOTES",
        votes: results,
>>>>>>> feature-admin-register
      });
      this.setState({
        combined_votes: [...this.state.combined_votes, ...results],
      });
      this.resolveVote(this.state.combined_votes);
    } catch (err) {
      console.error(err);
    }
  };

  resolveVote = (combined_votes) => {
    combined_votes.forEach((vote) => {
      vote.cool_votes = parseInt(vote.cool_votes);
      vote.uncool_votes = parseInt(vote.uncool_votes);
      vote.subzero_votes = parseInt(vote.subzero_votes);
      if (
        vote.cool_votes >= vote.uncool_votes &&
        vote.cool_votes > vote.subzero_votes
      ) {
        this.setState({
          cool_technology: [...this.state.cool_technology, vote],
        });
      }
      if (
        vote.uncool_votes > vote.cool_votes &&
        vote.uncool_votes > vote.subzero_votes
      ) {
        this.setState({
          uncool_technology: [...this.state.uncool_technology, vote],
        });
      }
      if (
        vote.subzero_votes >= vote.uncool_votes &&
        vote.subzero_votes >= vote.cool_votes
      ) {
        this.setState({
          subzero_technology: [...this.state.subzero_technology, vote],
        });
      }
    });
  };

  render() {
    return (
      <div data-test="component-displaytrend" className="displaytrend--wrapper">
        <div className="displaytrend--row">
          <UnCool
            uncool_technology={this.state.uncool_technology}
            data-test="component-uncool"
          />
        </div>
        <div className="displaytrend--row">
          <Cool
            cool_technology={this.state.cool_technology}
            data-test="component-cool"
          />
        </div>
        <div className="displaytrend--row">
          {this.props.tech_list ? (
            <SubZero
              subzero_technology={this.state.subzero_technology}
              data-test="component-subzero"
              svg={this.props.tech_list[5].svg}
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
<<<<<<< HEAD
  };
};




export default connect (mapStateToProps)(DisplayTrend);
=======
    tech_list: state.tech.list,
  };
};

export default connect(mapStateToProps)(DisplayTrend);
>>>>>>> feature-admin-register
