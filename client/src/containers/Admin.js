import React, { Component } from "react";
import Logo from "../images/logo.svg";
import "../stylesheets/global.scss";
import "../stylesheets/CoolWall.scss";
import "../stylesheets/Admin.scss";
import handlePostAdminLogin from "../helper/handlePostAdminLogin";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Admin extends Component {
  state = {
    email: "",
    password: "",
    flash: "",
  };
  UpdateEmailField = (e) => {
    this.setState({
      email: e.target.value,
      flash: "",
    });
  };
  UpdatePwdField = (e) => {
    this.setState({
      password: e.target.value,
      flash: "",
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
          this.props.dispatch({
            type: "CREATE_SESSION",
            token: response.token,
          });
          this.setState({
            flash: "",
            email: "",
            password: "",
          });
          console.log(this.props.token);
        }
      })
      .catch((err) => console.log(err.flash));
  };

  render() {
    if (this.props.token) {
      return <Redirect to="/dashboard" />;
    }
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
              <form
                className="admin--form"
                onSubmit={this.handleLoginSubmit}
                method=""
              >
                <div className="admin--flash_wrap">
                  {this.state.flash.includes("email") ? (
                    <p className="admin--flash">{this.state.flash}</p>
                  ) : null}
                  <div className="form--group">
                    <input
                      type="email"
                      placeholder="Mail"
                      name="email"
                      className="form--input"
                      value={this.state.email}
                      onChange={this.UpdateEmailField}
                    />
                  </div>
                </div>
                <div className="admin--flash_wrap">
                  {this.state.flash.includes("password") ? (
                    <p className="admin--flash">{this.state.flash}</p>
                  ) : null}
                  <div className="form--group">
                    <input
                      type="text"
                      placeholder="Password"
                      name="password"
                      className="form--input"
                      value={this.state.password}
                      onChange={this.UpdatePwdField}
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

export default connect(mapStateToProps)(Admin);
