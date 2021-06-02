import React, { Component } from "react";
import "./RightSectionContentBox.css";

class RightSectionContentBox extends Component {
  render() {
    return (
      <div className={this.props.box1.boxContainer}>
        <div className={this.props.box1.boxHeader}>
          <span className={this.props.box1.boxHeaderLeft}>
            <h3>{this.props.box1.headingLeft}</h3>
            <span></span>
          </span>
          <span className={this.props.box1.boxHeaderRight}>
            <h4>{this.props.box1.headingRightUpper}</h4>
            <span>{this.props.box1.headingRightBottom}</span>
          </span>
        </div>
        <div className={this.props.box1.boxContent}>
          <h2>{this.props.box1.pointsHeading}</h2>
          <ul>
            <li>
              <i className={" fa fa-check"} aria-hidden={"true"}></i>
              <p>{this.props.box1.point1}</p>
            </li>
            <li>
              <i className={" fa fa-check"} aria-hidden={"true"}></i>
              <p>{this.props.box1.point2}</p>
            </li>
            <li>
              <i className={" fa fa-check"} aria-hidden={"true"}></i>
              <p>{this.props.box1.point3}</p>
            </li>
            <li>
              <i className={" fa fa-check"} aria-hidden={"true"}></i>
              <p>{this.props.box1.point4}</p>
            </li>
          </ul>
        </div>
        <div className={this.props.box1.boxFooter}>
          <h6>{"View all the features"}</h6>
          <div className={"btn"}>
            <button>{"Start 14 days of free Pro plan"}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RightSectionContentBox;
