import React, { Component } from 'react';
import ChangePwd from "../components/ChangePwd";
import AddAdmin from "../components/AddAdmin";
import EditTechnology from "../components/EditTechnology";
import EditTimestamp from "../components/EditTimestamp";

export default class Settings extends Component {
    state = {
        changePwdMounted: false,
        addAdminMounted: false,
        EditTechnologyMounted: false,
        EditTimestamp: false
    }
    render() {
        return (
            <div>
                Setting
            </div>
        )
    }
}
