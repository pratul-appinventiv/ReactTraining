import React from "react";
import ColorDetails from "./ColorDetails";
import { Provider } from "react-redux";
import store from "./store/store";

function Assignment12() {
  return (
    <Provider store={store}>
      <ColorDetails />
    </Provider>
  );
}

export default Assignment12;
