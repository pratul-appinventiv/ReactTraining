import React from "react";

export default class Row extends React.Component {
  render() {
    const {
      background,
      position,
      adjust,
      margin,
      flexDirection,
      img,
      heading,
      content,
    } = this.props.row1;
    return (
      <div
        className={`${background} ${adjust} ${flexDirection} ${position} rowContainer`}
      >
        <img src={img} alt={"rowImg"} />
        <div className={` ${margin} contentContainer`}>
          <h3>{heading}</h3>
          <p>{content}</p>
        </div>
      </div>
    );
  }
}
