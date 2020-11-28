import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { createHistory as history } from "history";

// Internal modules
import AppDenizen from "./components/app_denizen";
import DenizenHome from "./components/app_denizen/denizen_home";
import "../assets/stylesheets/application.scss";

// Reducers
import navSecondaryReducer from "./reducers/nav_secondary_reducer";
import participantsReducer from "./reducers/participant_reducer";
import selectedDenizenTabReducer from "./reducers/selected_denizen_tab_reducer";

const identityReducer = (state = null) => state;

const initialState = {
  participants: [],
  denizenTabs: ["home", "interviews", "quotes"],
  selectedDenizenTab: "home",
};

const reducers = combineReducers({
  navSecondary: navSecondaryReducer,
  participants: participantsReducer,
  denizenTabs: identityReducer,
  selectedDenizenTab: selectedDenizenTabReducer,
});

// const root = document.getElementById("root");
// if (root) {
//   ReactDOM.render(<App />, root);
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));
const store = createStore(reducers, initialState, middlewares);

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <AppDenizen />
    {/* <Router history={history}>
      <Switch>
        <div className='thin-container'>
          <Switch>
            <Route path='/denizendesigner/:denizenTab' component={AppDenizen} />
            <Redirect from='/' to='/denizendesigner/home' />
          </Switch>
        </div>
      </Switch>
    </Router> */}
  </Provider>,
  root
);
