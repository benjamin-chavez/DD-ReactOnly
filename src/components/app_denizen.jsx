import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { createHistory as history } from "history";

import NavSecondary from "../containers/app_denizen/nav_secondary";
// import ParticipantList from "../containers/app_denizen/participant_list";
import DenizenHome from "../components/app_denizen/denizen_home";
import Interviews from "../containers/app_denizen/interviews";
import Report from "../components/app_denizen/report";
import DesignerDatabase from "../containers/app_denizen/designer_database";
import Quotes from "../containers/app_denizen/quotes";
import Resources from "../components/app_denizen/resources";

import ParticipantsShow from "../containers/app_denizen/participants_show";
import ParticipantsIndex from "../containers/app_denizen/participants_index";

const AppDenizen = (props) => {
  return (
    <div>
      <div className='row'>
        <NavSecondary />
      </div>
      <Route path='/denizendesigner/home' component={DenizenHome} />
      <Route exact path='/denizendesigner/interviews' component={Interviews} />
      <Route exact path='/denizendesigner/report' component={Report} />
      <Route
        exact
        path='/denizendesigner/designerdatabase'
        component={DesignerDatabase}
      />
      <Route exact path='/denizendesigner/quotes' component={Quotes} />
      <Route exact path='/denizendesigner/resources' component={Resources} />
      <Route
        path='/denizendesigner/interviews/:id'
        component={ParticipantsShow}
      />
    </div>
  );
};

export default AppDenizen;
