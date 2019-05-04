import React from "react";
import "./subHeader.css";

const subHeader = props => {
  return (
    <div className="subheader-container" id={`${props.title}`}>
      <hr />
      <div className="subheader">{props.title}</div>
      <hr />
    </div>
  );
};

export default subHeader;
