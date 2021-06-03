import React from "react";
import Row from "../../components/row";
import Data from "./Data";
import "./index.css";

export default class Assignment2 extends React.Component {
  renderHeader() {
    return (
      <div className={"Header"}>
        <img src={"Assignment2Images/Header.jpeg"} alt={"HeaderImg"} />
        <h1>
          {"9 React"}
          <br />
          {"Developer Tools"}
        </h1>
        <h2>
          {"to Create Better"}
          <br />
          {"Apps Faster"}
        </h2>
      </div>
    );
  }

  renderFooter() {
    return (
      <div className={"Footer"}>
        <i className={" fa fa-skype"} aria-hidden={"true"}></i>
        <span>{"eluminous_bde10 | "}</span>
        <i className={" fa fa-envelope"} aria-hidden={"true"}></i>
        <span>{"blz@eluminoustechnologies.com"}</span>
      </div>
    );
  }

  render() {
    return (
      <div className={"mainContainer"}>
        {this.renderHeader()}
        {Data.map((curr, ind) => {
          return <Row row1={curr} />;
        })}

        {this.renderFooter()}
      </div>
    );
  }
}
