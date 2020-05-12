import React from "react";
import "../stylesheets/TotalVotes.scss";

<<<<<<< HEAD
export default function TotalVotes() {
  return <div></div>;
=======
export default function TotalVotes({ total_votes }) {
  return (
    <div className="totalvotes--wrapper">
      <h1 className="totalvotes--h1">{total_votes}</h1>
    </div>
  );
>>>>>>> 90da3f909ba11844f630a8830b494b62004b0867
}
