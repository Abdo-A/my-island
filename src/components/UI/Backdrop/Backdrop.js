import React from "react";

import { BackdropZIndex } from "../../../data/z-indices";

import "./Backdrop.css";

const backdrop = props => {
  let mobileOnly = props.mobileOnly ? "mobileOnly" : "";
  let classNames = ["Backdrop", mobileOnly];
  return props.show ? (
    <div
      className={classNames.join(" ")}
      onClick={props.onClick}
      style={{ zIndex: BackdropZIndex }}
    />
  ) : null;
};

export default backdrop;
