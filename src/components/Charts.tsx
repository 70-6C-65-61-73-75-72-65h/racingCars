import React, { ReactElement } from "react";
import Races from "./Races";

interface Props {}

export default function Charts({}: Props): ReactElement {
  return (
    <div className="charts">
      <div className="charts__container">
        <Races />
        <Races />
      </div>
    </div>
  );
}
