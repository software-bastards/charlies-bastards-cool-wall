import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const DashBoard = (props) => {
  if (!props.token) {
    return <Redirect to="/admin" />;
  }
  return <div>dashboard</div>;
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(DashBoard);
