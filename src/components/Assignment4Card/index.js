import React from "react";

const Assignment4Card = (props) => {
  return (
    <div className={"card"}>
      <div className={"cardTop"}>
        <h2>{props.curr.heading}</h2>
        <ul>
          <li>
            <a href={"https://www.google.com"}>{props.curr.point1}</a>
          </li>
          <li>
            <a href={"https://www.google.com"}>{props.curr.point2}</a>
          </li>
          <li>
            <a href={"https://www.google.com"}>{props.curr.point3}</a>
          </li>
          <li>
            <a href={"https://www.google.com"}>{props.curr.point4}</a>
          </li>
        </ul>
      </div>
      <div className={"cardBottom"}>
        <a href={"https://www.google.com"} className={"seeAll"}>
          {props.curr.last}
        </a>
      </div>
    </div>
  );
};

export default Assignment4Card;
