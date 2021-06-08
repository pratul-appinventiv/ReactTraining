import React from "react";

const DefineDogecoin = () => {
  return (
    <div className={"dogecoinContainer"}>
      <div className={"connection"}>
        <figure>
          <img src={"Assignment3Images/connect.svg"} alt={"connect"} />
        </figure>
        <div className={"decentral"}>
          <img src={"Assignment3Images/blacktick.svg"} alt={"connect"} />
          <span>{"Decetralized"}</span>
        </div>
      </div>
      <div className={"definition"}>
        <h2>{"What is Dogecoin?"}</h2>
        <p>
          {
            "Dogecoin (Doge) is a cryptocurrency created by software engineers in 2013. It’s been stated that it was created jokingly as a homage to Bitcoin, but with recent price surges, it’s becoming a much more serious investment for crypto-enthusiasts. "
          }
        </p>
      </div>
      <div className={"relation"}>
        <figure>
          <img src={"Assignment3Images/relation.svg"} alt={"relation"} />
        </figure>
        <div className={"peer"}>
          <img src={"Assignment3Images/blacktick.svg"} alt={"connect"} />
          <span>{"Peer-to-peer"}</span>
        </div>
      </div>
    </div>
  );
};

export default DefineDogecoin;
