import counterReducer from "./counter/reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ counterReducer });

export default rootReducer;
