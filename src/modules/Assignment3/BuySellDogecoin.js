import React from "react";
const BuySellDogecoin = () => {
  return (
    <div className={"section1Container"}>
      <div className={"content"}>
        <h1>{"Buy & Sell Dogecoin Online"}</h1>
        <h2>{"Add Doge to your crypto wallet"}</h2>
        <p>
          {
            "Instant, fun, and free from the traditional banking system. Buy Dogecoin with your debit or credit card today."
          }
        </p>
      </div>
      <div className={"cryptoConvert"}>
        <h2>{"Get your crypto now!"}</h2>
        <div className={"buySellButtons"}>
          <button className={"buy"}>{"BUY"}</button>
          <button className={"sell"}>{"SELL"}</button>
        </div>
        <div className={"curr1Field"}>
          <img src={"Assignment3Images/usa-min-01@2x.png"} alt={"usaFlag"} />
          <span>{"100"}</span>
          <select id={"curr1"} name={"curr1"}>
            <option value={"USD"}>{"USD"}</option>
            <option value={"Rupee"}>{"Rupee"}</option>
          </select>
        </div>
        <div className={"curr2Field"}>
          <img src={"Assignment3Images/bitcoin.svg"} alt={"bitcoin"} />
          <span>{"0,00956474"}</span>
          <select id={"curr2"} name={"curr2"}>
            <option value={"BTC"}>{"BTC"}</option>
            <option value={"Rupee"}>{"Rupee"}</option>
          </select>
        </div>
        <button className={"doge"}>{"BUY DOGE"}</button>
      </div>
    </div>
  );
};

export default BuySellDogecoin;
