import React from "react";
import ProgressBar from "./ProgressBar";
import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";
import SubZeroIcon from "../images/subzero.svg";
import "../stylesheets/SubZero.scss";

const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";

function SubZero({ subzero_technology }) {
  return (
    <div data-test="component-subzero" className="subzero--wrapper">
      <div className="subzero--head">
        <img className="subzero--icon" src={SubZeroIcon} alt="Icon SubZero" />
        <h1 className="subzero--h1">SubZero</h1>
      </div>
      {subzero_technology.map((technology, index) => (
        <div key={index}>
          {technology.tech_list.name}
          <ProgressBar
            percent={calculateProgressBarPercent(
              technology,
              technology.uncool_votes
            )}
            color={yellow}
            name="UnCool"
          />
          <ProgressBar
            percent={calculateProgressBarPercent(
              technology,
              technology.cool_votes
            )}
            color={red}
            name="Cool"
          />
          <ProgressBar
            percent={calculateProgressBarPercent(
              technology,
              technology.subzero_votes
            )}
            color={blue}
            name="Subzero"
          />
        </div>
      ))}
      ,
    </div>
  );
}

export default SubZero;
