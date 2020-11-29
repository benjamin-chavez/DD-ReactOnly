import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchParticipant } from "../../actions";

export class ParticipantsShow extends Component {
  render() {
    if (!this.props.participant) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <div className=''>
          <h1>{this.props.participant.first_name}</h1>
          <h1>{this.props.participant.last_name}</h1>
          <p>Participant Details!</p>
        </div>
        <Link to='/'>Back</Link>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const participant = reduxState.participants.find((p) => p.id === idFromUrl);
  return { participant };
}

export default connect(mapReduxStateToProps)(ParticipantsShow);
