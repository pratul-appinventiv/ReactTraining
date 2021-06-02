import React, { Component } from "react";
import RightSectionContentBox from "./RightSectionContentBox";
import "./RightSectionContent.css";

class RightSectionContent extends Component {
  render() {
    const box1 = {
      boxContainer: "box1Container",
      boxHeader: "box1Header",
      boxHeaderLeft: "box1HeaderLeft",
      boxHeaderRight: "box1HeaderRight",
      boxContent: "box1Content",
      boxFooter: "box1Footer",
      headingLeft: "Lite",
      headingRightUpper: "Free",
      headingRightBottom: "with restrictions",
      pointsHeading: "Plan Includes:",
      point1: "Manage conversations directly from your website.",
      point2: "Bot without the AI service.",
      point3: "Achieved chat for 30 days",
      point4: "Free, for always",
    };

    const box2 = {
      boxContainer: "box2Container",
      boxHeader: "box1Header",
      boxHeaderLeft: "box2HeaderLeft",
      boxHeaderRight: "box2HeaderRight",
      boxContent: "box2Content",
      boxFooter: "box2Footer",
      headingLeft: "Pro",
      headingRightUpper: "29$",
      headingRightBottom: "monthly",
      pointsHeading: "All of lite plus:",
      point1:
        "Bot with AI that can recognize the user's behaviour and can automatize the sentences.",
      point2: "Unlimited conversational flows.",
      point3: "Facebook,Twitter,Instagram and Linkedin integration",
      point4: "Achieved chat without limits.",
    };

    return (
      <div className={"rightSectionContentContainer"}>
        <RightSectionContentBox box1={box1} />
        <RightSectionContentBox box1={box2} />
      </div>
    );
  }
}

export default RightSectionContent;
