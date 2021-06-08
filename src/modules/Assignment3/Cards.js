import React from "react";
const Cards = () => {
  return (
    <div className={"section2Container"}>
      <div className={"card1"}>
        <img
          src={"Assignment3Images/Mastercard-logo.svg"}
          alt={"Mastercard-img"}
        />
        <p>
          {"...."}&nbsp;&nbsp;&nbsp;&nbsp;{"...."}&nbsp;&nbsp;&nbsp;&nbsp;
          {"...."}&nbsp;&nbsp;&nbsp;&nbsp;<span>{"42"}</span>
        </p>
        <div className={"cardFields"}>
          <span className={"cardHolder"}>{"Card Holder"}</span>
          <span className={"cardExpiry"}>{"Expires"}</span>
        </div>
        <div className={"cardValues"}>
          <span className={"holderName"}>{"George Dux"}</span>
          <span className={"expiryDate"}>{"09/15/2022"}</span>
        </div>
      </div>
      <div className={"card2"}>
        <img src={"Assignment3Images/g4158.svg"} alt={"Visacard-img"} />
        <p>
          {"...."}&nbsp;&nbsp;&nbsp;{"...."}&nbsp;&nbsp;&nbsp;{"...."}
          &nbsp;&nbsp;<span>{"82"}</span>
        </p>
        <div className={"cardFields"}>
          <span className={"cardHolder"}>{"Card Holder"}</span>
          <span className={"cardExpiry"}>{"Expires"}</span>
        </div>
        <div className={"cardValues"}>
          <span className={"holderName"}>{"John Connor"}</span>
          <span className={"expiryDate"}>{"09/15/2022"}</span>
        </div>
      </div>
      <div className={"card3"}>
        <h2>{"Exchange your Dogecoin Instantly! "}</h2>
        <p>
          {
            "Buy & sell your Doge using your Visa or Mastercard debit or credit card."
          }
        </p>
      </div>
    </div>
  );
};

export default Cards;
