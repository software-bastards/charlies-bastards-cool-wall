import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/logo.svg";
import "../stylesheets/Dashboard.scss";
import "../stylesheets/global.scss";
import "../stylesheets/CoolWall.scss";

export const DashBoard = (props) => {
  if (!props.token) {
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

          <div className="dashboard--top_row"></div>
          <div className="dashboard--bottom_row"></div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
export default connect(mapStateToProps)(DashBoard);
