import React from "react";
import { initialColorState, initialThemeState } from "./reducers";

export const AppContext = React.createContext({
  initialColorState,
  initialThemeState,
});
