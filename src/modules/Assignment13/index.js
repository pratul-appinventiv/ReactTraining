import React, { useReducer } from "react";
import ColorsDetails from "./ColorsDetails";
import { initialState, Reducer } from "./reducers";

export const AppContext = React.createContext(initialState);

function Assignment13() {
  const [newState, dispatch] = useReducer(Reducer, initialState);
  return (
    <AppContext.Provider value={[newState, dispatch]}>
      <ColorsDetails />
    </AppContext.Provider>
  );
}

export default Assignment13;
