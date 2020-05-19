import React, { Component } from "react";
import "../stylesheets/global.scss";
import "../stylesheets/Admin.scss";
import closeIcon from "../images/closeIcon.svg";
import handlePostAdminPwdChange from "../helper/handlePostAdminPwdChange";
import "../stylesheets/ChangePwd.scss";

class ChangePwd extends Component {
  state = {
    password: "",
    confirmpassword: "",
    flash: "",
  };

  updatePwdField = (e) => {
    this.setState({ password: e.target.value, flash: "" });
  };
  updateConfirmPwdField = (e) => {
    this.setState({ confirmpassword: e.target.value, flash: "" });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    const adminData = {
      email: this.props.email,
      password: this.state.password,
    };

    handlePostAdminPwdChange(adminData)
      .then((response) => {
        if (response.hasOwnProperty("message")) {
          this.setState({
            flash: response.message,
            password: "",
            confirmpassword: "",
          });
        }
      })
      .catch((err) => console.log(err.flash));
  };

  render() {
    return (
      <div data-test="component-admin" className="coolwall--wrapper">
        <div className="coolwall--right">
          <div className="admin--right_wrapper">
            <div className="admin--form_wrap">
              <h1 className="admin--headline">Change Password</h1>
              {!this.state.flash ? (
                <form className="admin--form" onSubmit={this.handleLoginSubmit}>
                  <div className="form--group">
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
                  <div className="form--group">
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      name="password"
                      className="form--input"
                      value={this.state.confirmpassword}
                      onChange={this.updateConfirmPwdField}
                      data-test="input-password"
                    />
                  </div>
                  <button type="submit" className="button--light_blue">
                    Submit
                  </button>
                </form>
              ) : (
                <div
                  className="changepwd--success_popup"
                  onClick={this.props.handleChangePwdClose}
                >
                  <p>{this.state.flash}</p>
                  <img className="close--button" src={closeIcon} alt="Close" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePwd;
