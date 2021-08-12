import React, { ReactElement } from "react";
import Charts from "./Charts";
import Races from "./Races";

interface Props {}

export default function Page({}: Props): ReactElement {
  return (
    <div className="page">
      <Charts />
    </div>
  );
}
