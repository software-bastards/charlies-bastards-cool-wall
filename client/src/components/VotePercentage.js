import React from "react";
import "../stylesheets/VotePercentage.scss";
import CircleProgressBar from "./CircleProgressBar";

export default function VotePercentage({ votepercentage }) {
  return (
    <div
      className="votepercentage--wrapper"
      data-test="component-votepercentage"
    >
      <CircleProgressBar
        progress={votepercentage.cool}
        size={50}
        strokeWidth={5}
        circleOneStroke="red"
        circleTwoStroke="red"
        data-test="cool-progressbar"
      />
      <CircleProgressBar
        progress={votepercentage.uncool}
        size={50}
        strokeWidth={5}
        circleOneStroke="yellow"
        circleTwoStroke="yellow"
        data-test="uncool-progressbar"
      />
      <CircleProgressBar
        progress={votepercentage.subzero}
        size={50}
        strokeWidth={5}
        circleOneStroke="blue"
        circleTwoStroke="blue"
        data-test="subzero-progressbar"
      />
    </div>
  );
}
