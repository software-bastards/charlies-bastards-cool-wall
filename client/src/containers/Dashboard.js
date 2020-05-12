import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CoolestShit from "../components/CoolestShit";
import Logo from "../images/logo.svg";
import "../stylesheets/Dashboard.scss";
import TotalSubmissions from "../components/TotalSubmissions";
import TotalVotes from "../components/TotalVotes";
import VotePercentage from "../components/VotePercentage";
import TrendOverview from "../components/TrendOverview";
import handleFetchCombinedVotes from "../helper/handleFetchCombinedVotes";
import { gettingCoolestShit } from "../helper/gettingCoolestShit";
import { calculateVotePercentage } from "../helper/calculateVotePercentage";

export class DashBoard extends Component {
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
                <p className="dashboard--top_p">The Coolest Shit</p>
                <span className="dashboard--top_span">The Winner is</span>
                <div className="dashboard--coolestShit_component">
                  {this.props.votes ? (
                    <CoolestShit
                      coolestShit={gettingCoolestShit(this.props.votes)}
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
                  <TotalSubmissions />
                </div>
              </div>
              <div className="dashboard--top_col">
                <p className="dashboard--top_p">Votes in total</p>
                <span className="dashboard--top_span">
                  of trends in technology
                </span>
                <div className="dashboard--coolestShit_component">
                  <TotalVotes />
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
                  {this.props.votes ? (
                    <VotePercentage
                      votepercentage={calculateVotePercentage(this.props.votes)}
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
    votes: state.votes.votes,
  };
};
export default connect(mapStateToProps)(DashBoard);