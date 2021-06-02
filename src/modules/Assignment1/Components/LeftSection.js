import React, { Component } from "react";
import "./LeftSection.css";
import LeftSectionImg from "../Images/leftBoxImg.png";

class LeftSection extends Component {
  render() {
    return (
      <div className={"leftSectionContent"}>
        <h1>
          {"Save your"}
          <br />
          <span className={"boldText"}>{"money now."}</span>
        </h1>
        <p className={"firstPara"}>
          {
            "Manage your company Bot in few easy steps,join our Pro plan to try a 360"
          }{" "}
          &deg; {"experience of our service."}
        </p>
        <p className={"secondPara"}>
          {
            "Start your 14 days of free Pro plan, you can always upgrade it or stay with the Lite version for free."
          }
        </p>
        <img src={LeftSectionImg} alt="leftBoxImg" />
      </div>
    );
  }
}

export default LeftSection;
