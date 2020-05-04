import React, { Component } from "react";
import Logo from "../images/logo.svg";
import "../stylesheets/global.scss";
import "../stylesheets/CoolWall.scss";
import handlePostAdminLogin from "../helper/handlePostAdminLogin";
import "../stylesheets/Admin.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Admin extends Component {
  state = {
    email: "",
    password: "",
    flash: "",
  };

  updateEmailField = (e) => {
    this.setState({ email: e.target.value, flash: "" });
  };

  updatePasswordField = (e) => {
    this.setState({ password: e.target.value, flash: "" });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
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
      <div data-test="component-coolwall" className="coolwall--wrapper">
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
  loginSuccess: () => dispatch({ type: "CREATE_SESSION", token: true }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
