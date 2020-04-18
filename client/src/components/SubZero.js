import React from "react";
import ProgressBar from "./ProgressBar";
import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";
import "../stylesheets/SubZero.scss;";

const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";

function SubZero({ subzero_technology }) {
  return (
    <div data-test="component-subzero" className="subzero--wrapper">
      <h1>SubZero</h1>
      {subzero_technology.map((technology, index) => (
        <div key={index}>
          {technology.tech_list.name}
          <ProgressBar
            percent={calculateProgressBarPercent(
              technology,
              technology.uncool_votes
            )}
            color={yellow}
          />
          <ProgressBar
            percent={calculateProgressBarPercent(
              technology,
              technology.cool_votes
            )}
            color={red}
          />
          <ProgressBar
            percent={calculateProgressBarPercent(
              technology,
              technology.subzero_votes
            )}
            color={blue}
          />
        </div>
      ))}
      ,
    </div>
  );
}

export default SubZero;
