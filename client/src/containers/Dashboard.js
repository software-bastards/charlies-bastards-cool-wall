import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
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
import ChangePwd from "../components/ChangePwd";
import { calculateVotePercentage } from "../helper/calculateVotePercentage";
import Cool from "../images/cool.svg";
import UnCool from "../images/uncool.svg";
import SubZero from "../images/subzero.svg";
import handleFetchTechnologyList from "../helper/handleFetchTechnologyList";

export class DashBoard extends Component {
  state = {
    changePwdMounted: false,
  };
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
    try {
      const results = await handleFetchTotalSubmissions();
      this.props.dispatch({
        type: "FETCH_TOTALSUBMISSIONS",
        submissions: results,
      });
    } catch (err) {
      console.error(err);
    }
    try {
      const results = await handleFetchTechnologyList();
      this.props.dispatch({
        type: "FETCH_TECHLIST",
        list: results,
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleLogOut = () => {
    sessionStorage.removeItem("coolwall_admin");
    sessionStorage.removeItem("coolwall_admin_email");
    this.props.dispatch({
      type: "END_SESSION",
      token: false,
      email: "",
    });
  };
  toggleSetting = () => {
    this.setState({ settingsMounted: !this.state.toggleSetting });
  };

  render() {
    if (!this.props.token) {
      return <Redirect to="/admin" />;
    }

    return (
      <div data-test="component-dashboard" className="coolwall--wrapper">
        <div className="coolwall--animation_wrap">
          <div className="coolwall--icons_wrap">
            <div className="coolwall--icon_col">
              <img
                className="coolwall--icon_img"
                src={UnCool}
                alt="uncool logo"
              />
            </div>
            <div className="coolwall--icon_col">
              <img className="coolwall--icon_img" src={Cool} alt="cool logo" />
            </div>
            <div className="coolwall--icon_col">
              <img
                className="coolwall--icon_img"
                src={SubZero}
                alt="subzero logo"
              />
            </div>
          </div>
        </div>
        <div className="coolwall--left">
          <div className="coolwall--left_white">
            <Link to="/">
              <img className="coolwall--logo" src={Logo} alt="Logo CoolWall" />
            </Link>
          </div>
          <div className="coolwall--left_grey">
            <div className="dashboard--submit">
              <button
                onClick={this.handleLogOut}
                data-test="submit-button"
                className="button--light_blue"
              >
                LogOut
              </button>
              {!this.state.settingsMounted ? (
                <div
                  onClick={this.toggleSetting}
                  data-test="submit-button"
                  className="button--password"
                >
                  Settings
                </div>
              ) : (
                <div
                  onClick={this.toggleSetting}
                  data-test="submit-button"
                  className="button--password"
                >
                  Back
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="coolwall--right">
          <div className="coolwall--right_top"></div>
          {this.state.changePwdMounted ? (
            <ChangePwd
              email={this.props.email}
              handleChangePwdClose={this.handleLogOut}
            />
          ) : (
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
                        tech_list={this.props.tech_list}
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
                    <TrendOverview combined_votes={this.props.votes} />
                  </div>
                </div>
                <div className="dashboard--bottom_col">
                  <p className="dashboard--top_p">Vote Percentage</p>
                  <div className="dashboard--components_bottom ">
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
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    email: state.auth.email,
    combined_votes: state.votes.votes,
    total_submissions: state.submissions.submissions,
    tech_list: state.tech.list,
  };
};

export default connect(mapStateToProps)(DashBoard);



