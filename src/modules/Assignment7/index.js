import React, { useState } from "react";
import EditCarScreen from "./EditCarScreen";
import EditBikeScreen from "./EditBikeScreen";
import EditDealer from "./EditDealer";
import Heading from "./components/Heading";
import Data from "./Data";
import "./index.css";

const Assignment7 = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [key, setKey] = useState("");
  const [model, setModel] = useState("");

  if (localStorage.getItem("carData") === null)
    localStorage.setItem("carData", JSON.stringify(Data.cars));
  if (localStorage.getItem("bikeData") === null)
    localStorage.setItem("bikeData", JSON.stringify(Data.bikes));
  if (localStorage.getItem("dealerData") === null)
    localStorage.setItem("dealerData", JSON.stringify(Data.dealer));
  if (localStorage.getItem("customerData") === null)
    localStorage.setItem("customerData", JSON.stringify(Data.customer));

  const bikeData = JSON.parse(localStorage.getItem("bikeData"));
  const carData = JSON.parse(localStorage.getItem("carData"));
  const handleKey = () => {
    const value = document.getElementById("keySelect").value;
    setKey(value);
  };

  const handleModel = () => {
    const value = document.getElementById("modelSelect").value;
    setModel(value);
  };

  const checkHome = () => {
    const selectKey = document.getElementById("keySelect").value;
    const selectModel =
      selectKey !== "" && selectKey !== "dealer" && selectKey !== "customer"
        ? document.getElementById("modelSelect").value
        : "";

    if (selectKey === "") alert("Please select a key from the list");
    else if (
      (selectKey === "cars" || selectKey === "bikes") &&
      selectModel === ""
    )
      alert("Please select a vehicle model");
    else setIsHomeOpen(false);
  };
  return (
    <>
      {isHomeOpen ? (
        <>
          <Heading headingText={"Welcome To Home Screen"} />
          <div className={"homeContainer"}>
            <form>
              <label htmlFor={"keySelect"}>
                {"Select a key from the given list"}
              </label>
              <select
                id={"keySelect"}
                name={"keySelect"}
                placeholder={"Select Key"}
                onChange={handleKey}
              >
                <option value="">{"Select"}</option>
                <option value="cars">{"Cars"}</option>
                <option value="bikes">{"Bikes"}</option>
                <option value="dealer">{"Dealer"}</option>
                <option value="customer">{"Customer"}</option>
              </select>
              {(key === "bikes" || key === "cars") && (
                <>
                  <label htmlFor={"modelSelect"}>
                    {"Select a model from the given list"}
                  </label>
                  <select
                    id={"modelSelect"}
                    name={"modelSelect"}
                    placeholder={"Select Model"}
                    onChange={handleModel}
                  >
                    <option value="">{"Select"}</option>
                    {key === "bikes"
                      ? bikeData.map((curr, ind) => {
                          return (
                            <option key={ind} value={curr.model}>
                              {curr.model}
                            </option>
                          );
                        })
                      : null}

                    {key === "cars"
                      ? carData.map((curr, ind) => {
                          return (
                            <option key={ind} value={curr.Name}>
                              {curr.Name}
                            </option>
                          );
                        })
                      : null}
                  </select>
                </>
              )}
              <button onClick={checkHome} className={"submit"} type={"button"}>
                {"Submit"}
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <Heading headingText={"Welcome To Edit Screen"} />
          {key === "cars" && <EditCarScreen model={model} />}
          {key === "bikes" && <EditBikeScreen model={model} />}
          {(key === "dealer" || key === "customer") && (
            <EditDealer identity={key} />
          )}
        </>
      )}
    </>
  );
};

export default Assignment7;
