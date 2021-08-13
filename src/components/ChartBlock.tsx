import React, { ReactElement } from "react";

// interface Props {}
// : Props
const height100 = 70;
export default function ChartBlock({
  blockColor = "#7947F7",
  height = height100, // 100%
  onClick,
  className,
  ...props
  //   blockBorderColor = blockColor,
}): ReactElement {
  return (
    <svg
      width="28"
      height={height}
      viewBox={`0 0 28 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
      {...props}
    >
      <rect width="28" height={height} rx="2" fill={blockColor} />
    </svg>
  );
}
