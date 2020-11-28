import React from "react";

import NavSecondary from "../containers/app_denizen/nav_secondary";
import ParticipantList from "../containers/app_denizen/participant_list";

const AppDenizen = (props) => {
  return (
    <div>
      <div className='row'>
        {/* <NavSecondary denizenTabFromParams={props.match.params.denizenTab} /> */}
        <NavSecondary />
        {/* <div className='col-sm-12'>
          <ul>
            <li>Home</li>
            <li>Interviews</li>
            <li>Report</li>
            <li>Designer Database</li>
            <li>Quotes</li>
            <li>Resources</li>
          </ul>
        </div> */}
      </div>
      <div className='row'>
        <ParticipantList />
      </div>
    </div>
  );
};

export default AppDenizen;
