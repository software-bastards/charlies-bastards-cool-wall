import React, { Component } from "react";
import ChangePwd from "../components/ChangePwd";
import AddAdmin from "../components/AddAdmin";
import EditTechnology from "../components/EditTechnology";
import EditTimestamp from "../components/EditTimestamp";

export default class Settings extends Component {
  state = {
    changePwdMounted: false,
    addAdminMounted: false,
    EditTechnologyMounted: false,
    EditTimestampMounted: false,
  };
  toggleChangePwd = () => {
    this.setState({ changePwdMounted: !this.state.changePwdMounted });
  };
  toggleAddAdmin = () => {
    this.setState({ addAdminMounted: !this.state.addAdminMounted });
  };
  toggleEditTechnology = () => {
    this.setState({ editTechnologyMounted: !this.state.editTechnologyMounted });
  };
  toggleEditTimestamp = () => {
    this.setState({ editTimestampMounted: !this.state.editTimestampMounted });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleChangePwd}>Change password</button>

        {this.state.changePwdMounted ? <ChangePwd /> : <div>settings</div>}
      </div>
    );
  }
}
