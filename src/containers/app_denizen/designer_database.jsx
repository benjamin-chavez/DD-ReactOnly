import React, { Component } from "react";
import ParticipantList from "./participant_list";

class DesignerDatabase extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>DesignerDatabase Page</h1>
          <ParticipantList />
        </div>
      </div>
    );
  }
}

export default DesignerDatabase;
