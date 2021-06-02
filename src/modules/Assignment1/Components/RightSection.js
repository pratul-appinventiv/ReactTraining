import React, { Component } from "react";
import RightSectionHeader from "./RightSectionHeader";
import RightSectionContent from "./RightSectionContent";
import "./RightSection.css";

class RightSection extends Component {
  render() {
    return (
      <div className={"rightSectionContent"}>
        <RightSectionHeader />
        <RightSectionContent />
      </div>
    );
  }
}

export default RightSection;
