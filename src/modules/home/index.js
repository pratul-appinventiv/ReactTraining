import React, { Component } from "react";
import ReusableBox from "../../components/reusableBox";
import "./index.css";
class Home extends Component {
  renderBox(heading, buttonTitle, extraClass = "", color = "") {
    return (
      <div className={"itemContainer"}>
        <h3 className={extraClass}>{heading}</h3>
        <button style={{ backgroundColor: color }}>{buttonTitle}</button>
      </div>
    );
  }
  render() {
    return (
      <div className={"homeContainer"}>
        <h1>{"Home Page"}</h1>
        {this.renderBox("First Container", "Click Me First", "redClrTxt")}
        {this.renderBox("Second Container", "Click Me Second", "", "blue")}
        {this.renderBox("Third Container", "Click Me Third")}
        <ReusableBox
          heading={"Fourth Container"}
          buttonTitle={"Click Me Fourth"}
        />
        <ReusableBox
          heading={"Fifth Container"}
          buttonTitle={"Click Me Fifth"}
        />
      </div>
    );
  }
}

export default Home;
