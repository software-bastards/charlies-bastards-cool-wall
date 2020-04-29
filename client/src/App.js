import React, { Component } from "react";
import CoolWall from "./components/CoolWall";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./containers/Admin";
import DashBoard from "./containers/Dashboard";

import "./stylesheets/global.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>  
      <div className="app--wrapper" data-test="component-app">
        <Switch>
        <Route exact path="/" >
          <CoolWall  data-test="coolwall-component" />
          </Route>
          <Route  path="/coolwall/admin" >
          <Admin data-test="admin-component" />
          </Route>
          <Route exact path="/dashboard" >
          <DashBoard  data-test="dashboard-component" />
          </Route>          
      </Switch>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
