import React from "react";
import ProgressBar from "./ProgressBar";
import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";
import "../stylesheets/UnCool.scss";


const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";


function UnCool ({ uncool_technology }) {
  return (
    <div data-test="component-uncool" className="uncool--wrapper">
      <div className="uncool--head"> <h1 className="uncool--h1">SubZero</h1> </div>
     
      {uncool_technology.map((technology, index) => (
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

export default UnCool;
