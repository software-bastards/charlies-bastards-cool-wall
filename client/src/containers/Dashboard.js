import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/logo.svg";
import "../stylesheets/Dashboard.scss";
import "../stylesheets/global.scss";
import "../stylesheets/CoolWall.scss";
import CoolestShit from "../components/CoolestShit";
import TotalSubmissions from "../components/TotalSubmissions";
import TotalVotes from "../components/TotalVotes";
import TrendOverview from "../components/TrendOverview";
import VotePercentage from "../components/VotePercentage";
import handleFetchCombinedVotes from "../helper/handleFetchCombinedVotes";
import handleFetchTotalSubmissions from "../helper/handleFetchTotalSubmissions";
import calculateTotalVotes from "../helper/calculateTotalVotes";
import gettingCoolestShit from "../helper/gettingCoolestShit";
import resolveVote from "../helper/resolveVotes";
import { calculateVotePercentage } from "../helper/calculateVotePercentage";

export class DashBoard extends Component {
  state = {
    combined_votes: [],
    cool_technology: [],
    uncool_technology: [],
    subzero_technology: [],
  };

  componentDidMount = async () => {
    try {
      const results = await handleFetchCombinedVotes();
      this.props.dispatch({
        type: "FETCH_COMBINEDVOTES",
        votes: results,
      });
      this.setState({
        combined_votes: [...this.state.combined_votes, ...results],
      });
      this.resolveVote(this.state.combined_votes);
    } catch (err) {
      console.error(err);
    }
    try {
      const results = await handleFetchTotalSubmissions();
      this.props.dispatch({
        type: "FETCH_TOTALSUBMISSIONS",
        submissions: results,
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    if (!this.props.token) {
      return <Redirect to="/admin" />;
    }
    return (
      <div data-test="component-dashboard" className="coolwall--wrapper">
        <div className="coolwall--left">
          <div className="coolwall--left_white">
            <img className="coolwall--logo" src={Logo} alt="Logo CoolWall" />
          </div>
          <div className="coolwall--left_grey"></div>
          <p className="coolwall--copyright">@softwarebastards</p>
        </div>
        <div className="coolwall--right">
          <div className="coolwall--right_top"></div>
          <div className="coolwall--right_wrapper">
            <p className="right--top_p">Dashboard of the last 30 days!</p>

            <div className="dashboard--top_row">
              <div className="dashboard--top_col">
                <p className="dashboard--top_p">The Coolest Shit!</p>
                <span className="dashboard--top_span">the winner is</span>
                <div className="dashboard--coolestShit_component">
                  {this.props.combined_votes ? (
                    <CoolestShit
                      coolestshit_technology={gettingCoolestShit(
                        this.props.combined_votes
                      )}
                      data-test="component-coolestshit"
                    />
                  ) : null}
                </div>
              </div>
              <div className="dashboard--top_col">
                <p className="dashboard--top_p">Submissions in total</p>
                <span className="dashboard--top_span">
                  of trends in technology
                </span>
                <div className="dashboard--coolestShit_component">
                  {this.props.total_submissions ? (
                    <TotalSubmissions
                      submission_count={this.props.total_submissions}
                    />
                  ) : null}
                </div>
              </div>
              <div className="dashboard--top_col">
                <p className="dashboard--top_p">Votes in total</p>
                <span className="dashboard--top_span">
                  of trends in technology
                </span>
                <div className="dashboard--coolestShit_component">
                  {this.props.combined_votes ? (
                    <TotalVotes
                      total_votes={calculateTotalVotes(
                        this.props.combined_votes
                      )}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="dashboard--bottom_row">
              <div className="dashboard--bottom_col">
                <p className="dashboard--top_p">Overview of the trends</p>
                <div className="dashboard--components_bottom">
                  <TrendOverview />
                </div>
              </div>
              <div className="dashboard--bottom_col">
                <p className="dashboard--top_p">How many people voted for</p>

                <div className="dashboard--components_bottom">
                  {this.props.combined_votes ? (
                    <VotePercentage
                      votepercentage={calculateVotePercentage(
                        this.props.combined_votes
                      )}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    combined_votes: state.votes.votes,
    total_submissions: state.submissions.submissions,
  };
};
export default connect(mapStateToProps)(DashBoard);
