import React, { Component } from "react";
import CoolWall from "./components/CoolWall";
<<<<<<< HEAD
import "./stylesheets/global.css";
import "./stylesheets/global.scss";

=======

import "./stylesheets/global.scss";
import "./stylesheets/global.css";
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
class App extends Component {
  render() {
    return (
      <div className="app--wrapper" data-test="component-app">
<<<<<<< HEAD
        <CoolWall />
=======
        <CoolWall data-test="coolwall-component" />
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
      </div>
    );
  }
}

export default App;
