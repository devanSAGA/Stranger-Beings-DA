import React from "react";
import "./subHeader.css";

const subHeader = props => {
  return (
    <div className="subheader-container" id={`semester${props.semester}`}>
      <hr />
      <div className="subheader">{props.title}</div>
      <hr />
    </div>
  );
};

export default subHeader;
