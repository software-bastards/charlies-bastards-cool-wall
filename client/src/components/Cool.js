import React from "react";
import ProgressBar from "./ProgressBar";
const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";
function Cool({ cool_technology }) {
  const calculatePercent = (technology, votetype) => {
    const total =
      technology.subzero_votes +
      technology.uncool_votes +
      technology.cool_votes;
    return parseFloat((votetype * 100) / total);
  };
  return (
    <div>
      <h1>cool</h1>
      {cool_technology.map((technology, index) => (
        <div key={index}>
          {technology.tech_list.name}
          <ProgressBar
            percentage={calculatePercent(technology, technology.uncool_votes)}
            color={yellow}
          />
          <ProgressBar
            percentage={calculatePercent(technology, technology.cool_votes)}
            color={red}
          />
          <ProgressBar
            percentage={calculatePercent(technology, technology.subzero_votes)}
            color={blue}
          />
        </div>
      ))}
    </div>
  );
}
export default Cool;
