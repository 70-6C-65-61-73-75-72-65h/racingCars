import { chartBlockMax } from "@src/constants";
import React, { ReactElement } from "react";

// interface Props {}
// : Props
export default function ChartBlock({
  // blockColor = "#7947F7",
  blockColor,
  height, // = chartBlockMax, // 100%
  onClick,
  className,
  dataCount,
  dataPrevdifferpercent,
  dataId,
  //   blockBorderColor = blockColor,
}): ReactElement {
  height = dataCount === 0 ? 100 : height;
  blockColor = dataCount === 0 ? "white" : blockColor;
  return (
    <svg
      width="28"
      height={height}
      viewBox={`0 0 28 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
      data-count={dataCount}
      data-pdp={dataPrevdifferpercent}
      data-id={dataId}
    >
      <rect width="28" height={height} rx="2" fill={blockColor} />
    </svg>
  );
}
