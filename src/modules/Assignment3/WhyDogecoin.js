import React from "react";
import ButtonContainer from "../../components/buttonContainer";
const WhyDogecoin = () => {
  return (
    <div className={"section5Container"}>
      <figure>
        <img src={"Assignment3Images/man.jpg"} alt={"manImg"} />
      </figure>
      <div className={"contentContainer"}>
        <h2>{"Why Buy & Sell Dogecoin with Xcoins?"}</h2>
        <h3 className={"encrypt"}>
          <img src={"Assignment3Images/lock.svg"} alt={"lock"} />
          <span>{"Encryption technology"}</span>
        </h3>
        <p>
          {
            "Xcoins reputation for speed and security will keep you coming back. World-class encryption technology keeps your data secure and your transactions safe. "
          }
        </p>
        <h3 className={"care"}>
          <img src={"Assignment3Images/chat.svg"} alt={"chat"} />
          <span>{"Customer care"}</span>
        </h3>
        <p>
          {
            "If you have any questions about Dogecoin or how to buy & sell it, you can contact our 24/7 customer support team"
          }
        </p>
        <ButtonContainer />
      </div>
    </div>
  );
};

export default WhyDogecoin;
