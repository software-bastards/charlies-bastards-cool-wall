import React from "react";

export default function VotePercentage({ votepercentage }) {
  return (
    <div className="Votepercentage--wrapper">
      <p>Cool {votepercentage.cool}</p>
      <p>Uncool {votepercentage.uncool}</p>
      <p>Subzero {votepercentage.subzero}</p>
      <div></div>
    </div>
  );
}
