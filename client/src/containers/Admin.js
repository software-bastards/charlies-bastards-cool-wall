import React, { Component } from "react";
import Logo from "../images/logo.svg";
<<<<<<< HEAD
import "../stylesheets/global.scss";
import "../stylesheets/CoolWall.scss";
import handlePostAdminLogin from "../helper/handlePostAdminLogin";
import "../stylesheets/Admin.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Admin extends Component {
=======
import handlePostAdminLogin from "../helper/handlePostAdminLogin";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../stylesheets/global.scss";
import "../stylesheets/CoolWall.scss";
import "../stylesheets/Admin.scss";

export class Admin extends React.Component {
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
  state = {
    email: "",
    password: "",
    flash: "",
  };

  updateEmailField = (e) => {
<<<<<<< HEAD
    this.setState({ email: e.target.value, flash: "" });
  };

  updatePasswordField = (e) => {
    this.setState({ password: e.target.value, flash: "" });
=======
    this.setState({
      email: e.target.value,
      flash: "",
    });
  };

  updatePwdField = (e) => {
    this.setState({
      password: e.target.value,
      flash: "",
    });
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
=======

>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
    const adminData = {
      email: this.state.email,
      password: this.state.password,
    };
    handlePostAdminLogin(adminData)
      .then((response) => {
        if (response.hasOwnProperty("message")) {
          response.message.includes("password")
            ? this.setState({
                flash: response.message,
                password: "",
              })
            : this.setState({
                flash: response.message,
                password: "",
                email: "",
              });
        } else if (response.hasOwnProperty("token")) {
          this.props.loginSuccess();
          sessionStorage.setItem("coolwall_admin", response.token);
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
    if (this.props.token) {
      return <Redirect to="/dashboard" />;
    }
    return (
<<<<<<< HEAD
      <div data-test="component-coolwall" className="coolwall--wrapper">
=======
      <div data-test="component-admin" className="coolwall--wrapper">
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
        <div className="coolwall--left">
          <div className="coolwall--left_white">
            <img className="coolwall--logo" src={Logo} alt="Logo CoolWall" />
          </div>
          <div className="coolwall--left_grey"></div>
          <p className="coolwall--copyright">@softwarebastards</p>
        </div>
        <div className="coolwall--right">
          <div className="admin--right_wrapper">
            <div className="admin--form_wrap">
              <h1 className="admin--headline">Log In</h1>
<<<<<<< HEAD
              <form onSubmit={this.handleLoginSubmit} className="admin--form">
                <div className="form--group">
                  {this.state.flash.includes("email") ? (
                    <p className="admin--flash">{this.state.flash}</p>
                  ) : null}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form--input"
                    value={this.state.email}
                    onChange={this.updateEmailField}
                  />
                </div>
                <div className="form--group">
                  {this.state.flash.includes("password") ? (
                    <p className="admin--flash">{this.state.flash}</p>
                  ) : null}
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.updatePasswordField}
                    className="form--input"
                  />
                </div>
                {this.state.flash ? <p>{this.state.flash}</p> : null}
                <button className="admin_submit" type="submit">
                  Log in
=======
              <form className="admin--form" onSubmit={this.handleLoginSubmit}>
                <div className="form--group">
                  <div className="admin--flash_wrap">
                    {this.state.flash.includes("email") ? (
                      <p className="admin--flash">{this.state.flash}</p>
                    ) : null}
                    <input
                      placeholder="mail"
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
                    {this.state.flash.includes("password") ? (
                      <p className="admin--flash">{this.state.flash}</p>
                    ) : null}
                    <input
                      placeholder="Password"
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
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
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
<<<<<<< HEAD

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: () => dispatch({ type: "CREATE_SESSION", token: true }),
});

=======
const mapDispatchToProps = (dispatch) => ({
  loginSuccess: () => dispatch({ type: "CREATE_SESSION", token: true }),
});
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
