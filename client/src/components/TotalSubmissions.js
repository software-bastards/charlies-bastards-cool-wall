import React from "react";
import "../stylesheets/TotalSubmissions.scss";

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
}

export default TotalSubmissions;
