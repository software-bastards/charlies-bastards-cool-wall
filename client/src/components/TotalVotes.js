import React from "react";
<<<<<<< HEAD

export default function TotalVotes() {
  return <div></div>;
=======
import "../stylesheets/TotalVotes.scss";

export default function TotalVotes({ total_votes }) {
  return (
    <div className="totalvotes--wrapper">
      <h1 className="totalvotes--h1">{total_votes}</h1>
    </div>
  );
>>>>>>> aae8496189779b7bd41e026945e314d79f3d02e3
}
