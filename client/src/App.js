import React, { Component } from "react";
import CoolWall from "./components/CoolWall";
import "./stylesheets/global.css";
import "./stylesheets/global.scss";

class App extends Component {
  render() {
    return (
      <div className="app--wrapper" data-test="component-app">
        <CoolWall />
      </div>
    );
  }
}

export default App;
