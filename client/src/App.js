import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CoolWall from "./components/CoolWall";
<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./containers/Admin";
import DashBoard from "./containers/Dashboard";

=======
import Admin from "./containers/Admin";
import Dashboard from "./containers/Dashboard";
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
import "./stylesheets/global.scss";

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <BrowserRouter>  
      <div className="app--wrapper" data-test="component-app">
        <Switch>
        <Route exact path="/" >
          <CoolWall  data-test="coolwall-component" />
          </Route>
          <Route  path="/admin" >
          <Admin data-test="admin-component" />
          </Route>
          <Route path="/dashboard" >
          <DashBoard  data-test="dashboard-component" />
          </Route>          
      </Switch>
      </div>
      </BrowserRouter>
      
=======
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
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
    );
  }
}

export default App;
