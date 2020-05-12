import React from "react";
<<<<<<< HEAD

export default function TotalSubmissions() {
  return <div></div>;
}
=======
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
>>>>>>> aae8496189779b7bd41e026945e314d79f3d02e3
