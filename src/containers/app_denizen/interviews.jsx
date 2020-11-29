import React, { Component } from "react";
import ParticipantList from "./participant_list";
import ParticipantsIndex from "./participants_index";

class Interviews extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <h1>Interviews Page</h1>
          <ParticipantsIndex />
          {/* <ParticipantList /> */}
        </div>
      </div>
    );
  }
}

export default Interviews;
