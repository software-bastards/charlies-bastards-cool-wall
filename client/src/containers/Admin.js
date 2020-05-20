import React, { Component } from "react";
import Logo from "../images/logo.svg";
import handlePostAdminLogin from "../helper/handlePostAdminLogin";
import isAdminAuthenticated from "../helper/isAdminAuthenticated";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../stylesheets/global.scss";
import "../stylesheets/CoolWall.scss";
import "../stylesheets/Admin.scss";

<<<<<<< HEAD
<<<<<<< HEAD
export class Admin extends React.Component {
=======
export class Admin extends Component {
>>>>>>> fa2dbba8b95e816148177164bc749742093caf34
=======
export class Admin extends Component {
>>>>>>> 3b0c55bb2da436bcb4aa6793b3f1cdaf7795464a
  state = {
    email: "",
    password: "",
    flash: "",
  };

  updateEmailField = (e) => {
    this.setState({ email: e.target.value, flash: "" });
  };

  updatePwdField = (e) => {
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
                    {this.state.flash ? (
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
<<<<<<< HEAD

=======
>>>>>>> fa2dbba8b95e816148177164bc749742093caf34
=======
>>>>>>> 3b0c55bb2da436bcb4aa6793b3f1cdaf7795464a
const mapDispatchToProps = (dispatch) => ({
  loginSuccess: (email) =>
    dispatch({ type: "CREATE_SESSION", token: true, email: email }),
});

<<<<<<< HEAD
<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
=======
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
>>>>>>> fa2dbba8b95e816148177164bc749742093caf34
=======
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
>>>>>>> 3b0c55bb2da436bcb4aa6793b3f1cdaf7795464a
