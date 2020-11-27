import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setParticipants } from "../actions";

import Participant from "../components/participant";

class ParticipantList extends Component {
  // static defaultProps = {
  //   participants: [
  //     {
  //       first_name: "Andrea",
  //       last_name: "Ngan",
  //       designer_type: "Designer",
  //       bio: "",
  //       interviewed: true,
  //       email: "andrea@creativeresco.org",
  //     },
  //   ],
  // };

  componentWillMount() {
    // TODO: dispatch an action to update the redux state tree (participants)
    this.props.setParticipants();
  }

  render() {
    return (
      <div className='col-sm-12 participant-list'>
        {this.props.participants.map((participant) => (
          <Participant participant={participant} key={participant.id} />
        ))}
      </div>
    );
  }
}

// Bind action to props of component
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setParticipants: setParticipants }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    participants: reduxState.participants,
  };
}

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(ParticipantList);
