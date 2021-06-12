import React from "react";

const Heading = (props) => {
  return <h1 className={props.styleClass}>{props.headingText}</h1>;
};

export default Heading;
