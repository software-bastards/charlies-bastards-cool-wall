<<<<<<< HEAD

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/logo.svg";
import "../stylesheets/DashBoard.scss";
import "../stylesheets/global.scss";
import "../stylesheets/CoolWall.scss";
import handleFetchCombinedVotes from "../helper/handleFetchCombinedVotes";
import CoolestShit from "../components/CoolestShit";
import TotalSubmissions from "../components/TotalSubmissions";
import TotalVotes from "../components/TotalVotes";
import TrendOverview from "../components/TrendOverview";
import VotePercentage from "../components/VotePercentage";
import React, { Component } from 'react'



export class Dashboard extends Component  {

  componentDidMount = async () => {
    try {
      const results = await handleFetchCombinedVotes();

      this.props.dispatch({
        type: "FETCH_COMBINEDVOTES",
        votes: results
      });
      this.setState({
        combined_votes: [...this.state.combined_votes, ...results],
      });
      this.resolveVote(this.state.combined_votes);
=======
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
>>>>>>> feature-admin-register
    } catch (err) {
      console.error(err);
    }
  };
<<<<<<< HEAD
  
  
  
  
  
  
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
                <CoolestShit />
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
                <TrendOverview combined_votes={this.props.votes}/>
              </div>
            </div>
            <div className="dashboard--bottom_col">
              <p className="dashboard--top_p">How many people voted for</p>
              <div className="dashboard--components_bottom">
                <VotePercentage />
=======

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
>>>>>>> feature-admin-register
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  )
  }
};


=======
    );
  }
}
>>>>>>> feature-admin-register
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    votes: state.votes.votes,
  };
};
<<<<<<< HEAD
export default connect(mapStateToProps)(Dashboard);
=======
export default connect(mapStateToProps)(DashBoard);
>>>>>>> feature-admin-register
