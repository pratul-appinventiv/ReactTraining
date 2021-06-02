import React, { Component } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div className={"contentContainer"}>
        <LeftSection />
        <RightSection />
      </div>
    );
  }
}

export default Content;
