import React from "react";
import "../stylesheets/CircleProgressBar.scss";

export default function CircleProgressBar(props) {
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
  } = props;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;

  const circumference = 2 * Math.PI * radius;
  const offset = ((100 - progress) / 100) * circumference;
  return (
    <div>
      <svg className="svg" width={size} height={size}>
        <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <circle
          className="svg-circle"
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text className="svg-circle-text" x={center} y={center}>
          {progress}%
        </text>
      </svg>
    </div>
  );
}
