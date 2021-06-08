import React from "react";

const Header = () => {
  return (
    <div className={"headContainer"}>
      <div className={"logoContainer"}>
        <img src={"Assignment3Images/logo@2x.png"} alt={"logoImg"} />
      </div>
      <span />
      <ul className={"optionContainer"}>
        <li>
          <a href={"http://www.google.com"}>{"BUY BITCOIN"}</a>
        </li>
        <li>
          <a href={"http://www.google.com"}>{"SELL BITCOIN"}</a>
        </li>
        <li>
          <a href={"http://www.google.com"}>{"BLOG"}</a>
        </li>
        <li>
          <a href={"http://www.google.com"}>{"ABOUT US"}</a>
        </li>
      </ul>
      <div className={"buttonContainer"}>
        <img src={"Assignment3Images/usa-min-01.png"} alt={"usaFlag"} />
        <select id={"language"} name={"language"}>
          <option value={"ENG"}>{"ENG"}</option>
          <option value={"ES"}>{"ES"}</option>
        </select>
        <button className={"Login"}>{"LOGIN"}</button>
        <button className={"Sign"}>{"SIGN UP"}</button>
      </div>
    </div>
  );
};

export default Header;
