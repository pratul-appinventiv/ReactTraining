import React from "react";
import Assignment4Card from "../../../components/Assignment4Card";
import Data from "./Data";
const rightContainer = () => {
  return (
    <div className={"rightContainer"}>
      <nav>
        <div className={"support"}>{"Support"}</div>
        <i class="fa fa-bars" aria-hidden="true"></i>
        <div className={"back"}>
          <div className={"select"}>
            <img src={"Assignment4Images/usa-min-01.png"} alt={"flag"} />
            <select name={"lang"} id={"lang"}>
              <option value={"EN"}>{"EN"}</option>
              <option value={"GE"}>{"GE"}</option>
            </select>
          </div>
          <button>{"BACK TO XCOINS"}</button>
        </div>
      </nav>
      <div className={"search"}>
        <img src={"Assignment4Images/search.png"} alt={"search"} />
        <input
          type={"text"}
          placeholder={"Search Xcoins Support"}
          name={"search"}
          id={"search"}
        />
        <i class="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      <div className={"cardsContainer"}>
        {Data.map((curr, ind) => {
          return <Assignment4Card curr={curr} />;
        })}
      </div>
    </div>
  );
};

export default rightContainer;
