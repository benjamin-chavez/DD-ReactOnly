import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";

// Internal modules
import "../assets/stylesheets/application.scss";
import App from "./components/app";

// Reducers
import navSecondaryReducer from "./reducers/nav_secondary_reducer";
import participantsReducer from "./reducers/participant_reducer";

const reducers = combineReducers({
  navSecondary: navSecondaryReducer,
  participants: participantsReducer,
});

// const root = document.getElementById("root");
// if (root) {
//   ReactDOM.render(<App />, root);
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  root
);
