import React from "react";
import "../stylesheets/ProgressBar.scss";

const ProgressBar = (props) => {
  return (
    <div className="progress--bar" data-test="component-progressbar">
      <div className="progress--bar_name" style={{ color: `${props.color}` }}>
        {props.name}
      </div>
      <div
        className="filler"
        style={{ width: `${props.percent}%`, background: `${props.color}` }}
      />
    </div>
  );
};

export default ProgressBar;
