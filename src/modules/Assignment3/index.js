import React from "react";
import Header from "./Header";
import BuySellDogecoin from "./BuySellDogecoin";
import Cards from "./Cards";
import BuyDogecoin from "./BuyDogecoin";
import SellDogecoin from "./SellDogecoin";
import WhyDogecoin from "./WhyDogecoin";
import DefineDogecoin from "./DefineDogecoin";
import WhereDogecoin from "./WhereDogecoin"
import IsDogecoin from "./IsDogecoin"
import Footer from "./Footer"
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
      <WhereDogecoin/>
      <IsDogecoin/>
      <Footer/>
    </div>
  );
};

export default Assignment3;
