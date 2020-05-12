import React from "react";
import "../stylesheets/TotalSubmissions.scss";

<<<<<<< HEAD
export default function TotalSubmissions() {
  return <div></div>;
=======
function TotalSubmissions({ submission_count }) {
  return (
    <div
      data-test="component-totalsubmissions"
      className="totalsubmissions--wrapper"
    >
      <h1 className="totalsubmissions--h1">
        {submission_count[0].total_submissions}
      </h1>
    </div>
  );
>>>>>>> 90da3f909ba11844f630a8830b494b62004b0867
}

export default TotalSubmissions;
