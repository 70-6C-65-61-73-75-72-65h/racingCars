import React, { ReactElement } from "react";

interface Props {}

export default function Popup({}: Props): ReactElement {
  return (
    <div className="popup">
      <div className="popup__container"></div>
    </div>
  );
}
