import React, { Component } from "react";
import CoolWall from "./components/CoolWall";

import "./stylesheets/global.scss";
import "./stylesheets/global.css";
class App extends Component {
  render() {
    return (
      <div className="app--wrapper" data-test="component-app">
        <CoolWall data-test="coolwall-component" />
      </div>
    );
  }
}

export default App;