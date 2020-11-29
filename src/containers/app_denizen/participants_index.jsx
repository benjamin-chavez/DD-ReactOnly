import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchParticipants } from "../../actions";

class ParticipantsIndex extends Component {
  componentWillMount() {
    this.props.fetchParticipants();
  }

  renderParticipants() {
    return this.props.participants.map((participant) => {
      return (
        <Link
          to={`/denizendesigner/interviews/${participant.id}`}
          key={participant.id}
        >
          <div className='card participant-item'>
            <p>
              {participant.first_name} {participant.last_name}
            </p>
            <p>{participant.designer_type}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='participant-list'></div>
        {this.renderParticipants()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    participants: state.participants,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchParticipants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsIndex);
