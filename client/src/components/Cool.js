import React from "react";
import ProgressBar from "./ProgressBar";
import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";

const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";
function Cool({ cool_technology }) {
  return (
    <div>
      <h1>cool</h1>
      {cool_technology.map((technology, index) => (
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
    </div>
  );
}
export default Cool;
