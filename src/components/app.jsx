import React, { Component } from "react";

import NavSecondary from "../containers/nav_secondary";
import ParticipantList from "../containers/participant_list";

class app extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <NavSecondary />
        </div>
        <div className='row'>
          <ParticipantList />
        </div>
      </div>
    );
  }
}

export default app;
