import React from "react";
const WhereDogecoin = () => {
  return (
    <div className={"whereDogecoinContainer"}>
      <h3>{"Where Can I Spend my Dogecoin?"}</h3>
      <p>
        {
          "There are a variety of fashion and clothing shops online accepting Doge as payment. You can also use your Doge to pay for domains and hosting, or online casinos."
        }
      </p>
      <div className={"imagesContainer"}>
        <div className={"clothesWrapper"}>
          <img src={"Assignment3Images/clothes.svg"} alt={"clothes"} />
          <span>{"Clothing stores"}</span>
        </div>
        <img src={"Assignment3Images/domain.svg"} alt={"domain"} />
        <img src={"Assignment3Images/casino.svg"} alt={"casino"} />
      </div>
    </div>
  );
};

export default WhereDogecoin;
