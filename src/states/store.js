import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "states/reducer";
import rootSaga from "states/saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

// Create the Redux store with the middleware
const store = createStore(rootReducer, applyMiddleware(...middleware));

// run the root saga
sagaMiddleware.run(rootSaga);

export default store;
