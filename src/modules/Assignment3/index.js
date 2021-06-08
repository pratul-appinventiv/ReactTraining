import React from "react";
import Header from "./Header";
import BuySellDogecoin from "./BuySellDogecoin";
import Cards from "./Cards";
import BuyDogecoin from "./BuyDogecoin";
import SellDogecoin from "./SellDogecoin";
import WhyDogecoin from "./WhyDogecoin";
import DefineDogecoin from "./DefineDogecoin";

import "./index.css";

const Assignment3 = () => {
  return (
    <div className={"mainContainer"}>
      <Header />
      <BuySellDogecoin />
      <Cards />
      <BuyDogecoin />
      <SellDogecoin />
      <WhyDogecoin />
      <DefineDogecoin />
    </div>
  );
};

export default Assignment3;
