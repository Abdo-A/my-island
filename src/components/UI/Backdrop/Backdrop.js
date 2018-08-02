import React from "react";

import "./Backdrop.css";

const backdrop = props => {
  let mobileOnly = props.mobileOnly ? "mobileOnly" : "";
  let classNames = ["Backdrop", mobileOnly];
  return props.show ? (
    <div className={classNames.join(" ")} onClick={props.onClick} />
  ) : null;
};

export default backdrop;
