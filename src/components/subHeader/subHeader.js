import React from "react";
import "./subHeader.css";

const subHeader = props => {
  return (
    <div className="subheader-container" id={`semester${props.semester}`}>
      <hr />
      <div className="subheader">Semester {props.semester}</div>
      <hr />
    </div>
  );
};

export default subHeader;
