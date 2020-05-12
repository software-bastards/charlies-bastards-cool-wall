import React from "react";
import "../stylesheets/TotalVotes.scss";

export default function TotalVotes({ total_votes }) {
  return (
    <div className="totalvotes--wrapper">
      <h1 className="totalvotes--h1">{total_votes}</h1>
    </div>
  );
}
