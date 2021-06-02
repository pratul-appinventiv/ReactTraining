import React, { Component } from "react";
import "./RightSectionHeader.css";

class RightSectionHeader extends Component {
  render() {
    return (
      <div className={"rightSectionHeader"}>
        <h2 className={"heading"}>
          {"Start now"}
          <br />
          your <span className={"headingBold"}>{"free plan."}</span>
        </h2>
        <h6 className={"contactText"}>
          {"Are you a corporate?"}
          <br />
          <span>{"Contact us"}</span>
        </h6>
      </div>
    );
  }
}

export default RightSectionHeader;
