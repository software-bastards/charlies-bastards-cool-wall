import React from "react";
import "../stylesheets/ProgressBar.scss";

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <div
        className="filler"
        style={{ width: `${props.percentage}%`, background: `${props.color}` }}
      />
    </div>
  );
};

export default ProgressBar;
