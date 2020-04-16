import React from "react";
import ProgressBar from "./ProgressBar";



const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";

function UnCool({ uncool_technology }) {
    const calculatePercent = (technology, votetype) => {
        const total =
        technology.subzero_votes +
        technology.uncool_votes +
        technology.cool_votes
        return (votetype * 100) / total
    };

  return (
    <div data-test="component-uncool" className="uncool--wrapper">
      

      {uncool_technology.map((technology, index) => (
        <div key={index}> 
        {technology.tech_list.name}
      
       <ProgressBar percent={calculatePercent (technology, technology.uncool_votes)} color={yellow} />
       <ProgressBar percent={calculatePercent (technology, technology.cool_votes)} color={red} />
       <ProgressBar percent={calculatePercent (technology, technology.subzero_votes)} color={blue} />
     </div> 
      ))}

     
    </div>
  );
}

export default UnCool;
