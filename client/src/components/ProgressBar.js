import React from "react";
import "../stylesheets/ProgressBar.scss";

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <div
        className="filler"
        style={{ width: `${props.percent}%`, background: `${props.color}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
