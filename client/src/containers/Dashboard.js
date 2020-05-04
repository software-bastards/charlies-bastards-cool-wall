import React from "react";
import { Redirect } from "react-router-dom";
import isAdminAuthenticated from "../helper/isAdminAuthenticated";
import { connect } from "react-redux";

export const Dashboard = (props) => {
  if (!isAdminAuthenticated() && !props.token) {
    return <Redirect to="/admin" />;
  }
  return (
    <div data-test="component-dashboard">
      dashboard
      <button
        onClick={() => {
          props.logoutSuccess();
          sessionStorage.removeItem("jwt");
        }}
      >
        logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => ({
  logoutSuccess: () => dispatch({ type: "END_SESSION", token: false }),
  loginSuccess: () => dispatch({ type: "CREATE_SESSION", token: true }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
