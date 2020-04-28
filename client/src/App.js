import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CoolWall from "./components/CoolWall";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import "./stylesheets/global.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app--wrapper" data-test="component-app">
          <Switch>
            <Route exact path="/">
              <CoolWall data-test="coolwall-component" />
            </Route>
            <Route path="/admin">
              <Admin data-test="admin-component" />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard data-test="dashboard-component" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
