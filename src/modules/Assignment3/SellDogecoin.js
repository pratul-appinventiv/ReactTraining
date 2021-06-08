import React from "react";
import BuySellHeader from "../../components/buySellHeader";
import BuySellStep from "../../components/buySellStep";
import BuySellButton from "../../components/buySellButton";

const SellDogecoin = () => {
  return (
    <div className={"section4Container"}>
      <BuySellHeader
        heading1={"How to Sell Dogecoin"}
        heading2={"Only 3 simple steps"}
      />
      <div className={"stepsContainer"}>
        <div className={"stepBlock"}>
          <figure className={"figure1"}>
            <img src={"Assignment3Images/noun_greentick.svg"} alt={"stepImg"} />
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
            <img
              src={"Assignment3Images/noun_greenWallet.svg"}
              alt={"stepImg"}
            />
            <img
              className={"download"}
              src={"Assignment3Images/noun_greenDownload.svg"}
              alt={"stepImg"}
            />
          </figure>
          <BuySellStep
            stepNo={"2"}
            stepName={"Sell Dogecoin"}
            stepInfo={
              "Select Dogecoin under the “sell” tab and decide how much you want to sell"
            }
            stepMargin={"step2MarginLeft"}
            stepContentMargin={"step2ContentMarginLeft"}
          />
        </div>

        <div className={"stepBlock"}>
          <div className={"figure3"}>
            <img
              src={"Assignment3Images/noun_greentimer.svg"}
              alt={"stepImg"}
            />
            <div className={"timerValue"}>
              <div className={"value"}>{"15"}</div>
              <div className={"min"}>
                <span className={"minutes"}>{"MIN"}</span>
                <img
                  src={"Assignment3Images/noun_greenLightning.svg"}
                  alt={"stepImg"}
                />
              </div>
            </div>
          </div>
          <BuySellStep
            stepNo={"3"}
            stepName={"Receive cash"}
            stepInfo={
              "We will send your coins to your wallet within 15 minutes of payment approval."
            }
            stepMargin={"step3MarginLeft"}
            stepContentMargin={"step3ContentMarginLeft"}
          />
        </div>
      </div>
      <BuySellButton btnValue={"Sell Bitcoin"} background={"btnGreen"} />
    </div>
  );
};

export default SellDogecoin;
