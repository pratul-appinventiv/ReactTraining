import React from "react";

const buySellStep = (props) => {
  return (
    <>
      <div className={`${props.stepMargin} step`}>
        <div className={"stepNo"}>{props.stepNo}</div>
        <h3 className={"stepName"}>{props.stepName}</h3>
      </div>
      <p className={props.stepContentMargin}>{props.stepInfo}</p>
    </>
  );
};

export default buySellStep;
