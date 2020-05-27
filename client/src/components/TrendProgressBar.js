import React from "react";
import "../stylesheets/ProgressBar.scss";
import "../stylesheets/TrendProgressBar.scss";

const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";

const TrendProgressBar = (props) => {
  return (
    <div className="trend--progress--bar" data-test="component-trendprogressbar">
      
      <div
        className="trend--filler"
        style={{ width: `${props.percentUncool}%`, background: `${yellow}` }}
      />
      <div
        className="trend--filler"
        style={{ width: `${props.percentCool}%`, background: `${red}` }}
      />
      <div
        className="trend--filler"
        style={{ width: `${props.percentSubZero}%`, background: `${blue}` }}
      />
    </div>
  );
};

export default TrendProgressBar;
