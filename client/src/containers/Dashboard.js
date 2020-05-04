import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const DashBoard = (props) => {
  if (!props.token) {
    return <Redirect to="/admin" />;
  }
<<<<<<< HEAD
  return <div>dashboard</div>;
};

=======
  return <div data-test="component-dashboard">dashboard</div>;
};
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
<<<<<<< HEAD

=======
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
export default connect(mapStateToProps)(DashBoard);
