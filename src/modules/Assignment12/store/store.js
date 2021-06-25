import rootReducer from "../rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();
const multipleMiddleWares = compose(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, multipleMiddleWares);

export default store;
