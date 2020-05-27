import React, { Component } from "react";
import Logo from "../images/logo.svg";
import handlePostAdminLogin from "../helper/handlePostAdminLogin";
import isAdminAuthenticated from "../helper/isAdminAuthenticated";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import "../stylesheets/global.scss";
import "../stylesheets/CoolWall.scss";
import "../stylesheets/Admin.scss";


export class Admin extends React.Component {




  state = {
    email: "",
    password: "",
    flash: "",
  };

  /**
   * @method updateEmailField - An onChange function for the email input field
   * @param {MouseEvent} e
   */
  updateEmailField = (e) => {
    this.setState({ email: e.target.value, flash: "" });
  };

  /**
   * @method updatePwdField - An onChange function for the password input field
   * @param {MouseEvent} e
   */
  updatePwdField = (e) => {
    this.setState({ password: e.target.value, flash: "" });
  };

  /**
   * @method handleLoginSubmit - An onSubmit function for the login form that sends login data to server for authentication
   * @param {MouseEvent} e
   */
  handleLoginSubmit = (e) => {
    e.preventDefault();
    const adminData = {
      email: this.state.email,
      password: this.state.password,
    };

    handlePostAdminLogin(adminData)
      .then((response) => {
        if (response.hasOwnProperty("message")) {
          this.setState({
            flash: response.message,
            password: "",
            email: "",
          });
        } else if (response.hasOwnProperty("token")) {
          this.props.loginSuccess(response.secureAdmin.email);
          sessionStorage.setItem("coolwall_admin", response.token);
          sessionStorage.setItem(
            "coolwall_admin_email",
            response.secureAdmin.email
          );
          this.setState({
            flash: "",
            email: "",
            password: "",
          });
        }
      })
      .catch((err) => console.log(err.flash));
  };

  render() {
    if (isAdminAuthenticated() && this.props.token) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div data-test="component-admin" className="coolwall--wrapper">
        <div className="coolwall--left">
          <div className="coolwall--left_white">
            <Link to="/">
              <img className="coolwall--logo" src={Logo} alt="Logo CoolWall" />
            </Link>
          </div>
          <div className="coolwall--left_grey"></div>
        </div>
        <div className="coolwall--right">
          <div className="admin--right_wrapper">
            <div className="admin--form_wrap">
              <h1 className="admin--headline">Log In</h1>
              <form className="admin--form" onSubmit={this.handleLoginSubmit}>
                <div className="form--group">
                  <div className="admin--flash_wrap">
                    {this.state.flash ? (
                      <p className="admin--flash">{this.state.flash}</p>
                    ) : null}
                    <input
                      placeholder="Your Mail"
                      type="email"
                      name="email"
                      className="form--input"
                      value={this.state.email}
                      onChange={this.updateEmailField}
                      data-test="input-email"
                    />
                  </div>
                </div>
                <div className="form--group">
                  <div className="admin--flash_wrap">
                    <input
                      placeholder="Your Password"
                      type="password"
                      name="password"
                      className="form--input"
                      value={this.state.password}
                      onChange={this.updatePwdField}
                      data-test="input-password"
                    />
                  </div>
                </div>
                <button type="submit" className="button--light_blue">
                  Submit
                </button>
              </form>
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: (email) =>
    dispatch({ type: "CREATE_SESSION", token: true, email: email }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Admin);