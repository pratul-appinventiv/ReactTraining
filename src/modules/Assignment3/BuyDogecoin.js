import React from "react";
import BuySellHeader from "../../components/buySellHeader";
import BuySellStep from "../../components/buySellStep";
import BuySellButton from "../../components/buySellButton";
const BuyDogecoin = () => {
  return (
    <div className={"section3Container"}>
      <img className={"background"} src={"Assignment3Images/background.svg"} alt={"background"}/>
      <BuySellHeader
        heading1={"How to Buy Dogecoin"}
        heading2={"Only 3 simple steps"}
      />
      <div className={"stepsContainer"}>
        <div className={"stepBlock"}>
          <figure className={"figure1"}>
            <img src={"Assignment3Images/noun_tick.svg"} alt={"stepImg"} />
          </figure>
          <BuySellStep
            stepNo={"1"}
            stepName={"Get verified quickly"}
            stepInfo={
              "Just sign up, upload your verification documents and open your account."
            }
          />
        </div>

        <div className={"stepBlock"}>
          <figure className={"figure2"}>
            <img src={"Assignment3Images/noun_Wallet.svg"} alt={"stepImg"} />
            <img
              className={"download"}
              src={"Assignment3Images/noun_Download.svg"}
              alt={"stepImg"}
            />
          </figure>
          <BuySellStep
            stepNo={"2"}
            stepName={"Buy Dogecoin"}
            stepInfo={
              "Select which coins you would like to buy and how much you want to purchase."
            }
            stepMargin={"step2MarginLeft"}
            stepContentMargin={"step2ContentMarginLeft"}
          />
        </div>

        <div className={"stepBlock"}>
          <div className={"figure3"}>
            <img src={"Assignment3Images/noun_timer.svg"} alt={"stepImg"} />
            <div className={"timerValue"}>
              <div className={"value"}>{"15"}</div>
              <div className={"min"}>
                <span className={"minutes"}>{"MIN"}</span>
                <img
                  src={"Assignment3Images/noun_Lightning.svg"}
                  alt={"stepImg"}
                />
              </div>
            </div>
          </div>
          <BuySellStep
            stepNo={"3"}
            stepName={"Receive coins"}
            stepInfo={
              "We will send your coins to your wallet within 15 minutes of payment approval."
            }
            stepMargin={"step3MarginLeft"}
            stepContentMargin={"step3ContentMarginLeft"}
          />
        </div>
      </div>
      <BuySellButton btnValue={"BUY DOGECOIN"} background={"btnCerulean"} />
    </div>
  );
};

export default BuyDogecoin;
