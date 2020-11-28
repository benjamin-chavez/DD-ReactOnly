import React, { Component } from "react";

import NavSecondary from "../containers/app_denizen/nav_secondary";
import ParticipantList from "../containers/app_denizen/participant_list";

class AppDenizen extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <NavSecondary denizenTabFromParams={props.match.params.denizenTab} />
        </div>
        <div className='row'>
          <ParticipantList />
        </div>
      </div>
    );
  }
}

export default AppDenizen;
