import React from "react";
import ButtonContainer from "../../components/buttonContainer";

const IsDogecoin = () => {
  return (
    <div className={"isDogecoinContainer"}>
      <figure>
        <img src={"Assignment3Images/lady.svg"} alt={"womanImg"} />
      </figure>
      <div className={"contentContainer"}>
        <h2>{"Is Dogecoin For Me?"}</h2>
        <p>
          {
            "Dogecoin, although created for fun, has recently had a large price surge. Its growth in popularity also means that more companies are accepting it as a form of payment. "
          }
        </p>
        <ButtonContainer />
      </div>
    </div>
  );
};

export default IsDogecoin;
