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
import ParticipantsIndex from "./containers/app_denizen/participants_index";
import ParticipantsShow from "./containers/app_denizen/participants_show";
// import DenizenHome from "./components/app_denizen/denizen_home";
// import ParticipantsShow from "./containers/app_denizen/participants_show";
import "../assets/stylesheets/application.scss";

// Reducers
import navSecondaryReducer from "./reducers/nav_secondary_reducer";
import participantsReducer from "./reducers/participant_reducer";
import selectedDenizenTabReducer from "./reducers/selected_denizen_tab_reducer";

const identityReducer = (state = null) => state;

const initialState = {
  participants: [],
  denizenTabs: [
    "Home",
    "Interviews",
    "Report",
    "Designer Database",
    "Quotes",
    "Resources",
  ],
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
    {/* <AppDenizen /> */}
    <Router history={history}>
      {/* <div className='thin-container'> */}
      <div className=''>
        <Switch>
          <Route path='/denizendesigner' component={AppDenizen} />
          <Redirect exact from='/' to='/denizendesigner/home' />
          {/* <Route
            exact
            path='/denizendesigner/participantsindex'
            component={ParticipantsIndex}
          /> */}
          {/* <Route
            exact
            path='/denizendesigner/interviews/:id'
            component={ParticipantsShow}
          /> */}
          {/* <Redirect from='/' to='/participantsindex' /> */}
          {/* <Route
            path='/denizendesigner/interviews/:id'
            component={ParticipantsShow}
          /> */}
        </Switch>
      </div>
    </Router>
  </Provider>,
  root
);
