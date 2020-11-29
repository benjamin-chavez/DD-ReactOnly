import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setParticipants } from "../../actions";

import Participant from "../../components/app_denizen/participant";

class ParticipantList extends Component {
  componentWillMount() {
    // TODO: dispatch an action to update the redux state tree (participants)
    this.props.setParticipants();
  }

  renderParticipants() {
    return this.props.participants.map((participant) => {
      return (
        <Link
          to={`/denizendesigner/participants/${participant.id}`}
          key={participant.id}
        >
          <div className='participant card'>
            <div className='card-description'>
              <h2>{participant.first_name}</h2>
              <p>{participant.last_name}</p>
              <p>test</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div>{this.renderParticipants()}</div>

        {/* <div className='col-sm-12 participant-list'>
          {this.props.participants.map((participant) => (
            <Participant participant={participant} key={participant.id} />
          ))}
        </div> */}
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
