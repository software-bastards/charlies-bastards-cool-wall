import React, { Component } from "react";
import Logo from "../images/logo.svg";
import handlePostAdminLogin from "../helper/handlePostAdminLogin";
import "../stylesheets/global.scss";
import "../stylesheets/CoolWall.scss";
import "../stylesheets/Admin.scss";

class Admin extends Component {
  state = {
    email: "",
    password: "",
    flash: "",
    flagForFlash: 0,
  };
  updateEmailField = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  updatePwdField = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleLoginSubmit = (e) => {
    e.preventDefault();
    const adminData = {
      email: this.state.email,
      password: this.state.password,
    };
    handlePostAdminLogin(adminData)
      .then((response) => {
        console.log(response);
        if (response.hasOwnProperty("message")) {
          response.message.includes("password")
            ? this.setState({
                flash: response.message,
                password: "",
                flagForFlash: 1,
              })
            : this.setState({
                flash: response.message,
                password: "",
                email: "",
                flagForFlash: 2,
              });
        } else {
          this.setState({
            flash: "",
            email: "",
            password: "",
            flagForFlash: 0,
          });
        }
      })
      .catch((err) => console.log(err.flash));
  };

  render() {
    return (
      <div data-test="component-admin" className="coolwall--wrapper">
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
              <form className="admin--form" onSubmit={this.handleLoginSubmit}>
                <div className="form--group">
                  <div className="admin--flash_wrap">
                    {this.state.flagForFlash === 2 ? (
                      <p className="admin--flash">{this.state.flash}</p>
                    ) : null}
                    <input
                      placeholder="mail"
                      type="email"
                      name="email"
                      className="form--input"
                      value={this.state.email}
                      onChange={this.updateEmailField}
                    />
                  </div>
                </div>
                <div className="form--group">
                  <div className="admin--flash_wrap">
                    {this.state.flagForFlash === 1 ? (
                      <p className="admin--flash">{this.state.flash}</p>
                    ) : null}
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      className="form--input"
                      value={this.state.password}
                      onChange={this.updatePwdField}
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

export default Admin;
