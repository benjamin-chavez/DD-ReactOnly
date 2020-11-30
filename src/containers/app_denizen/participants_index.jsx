import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <Row>
          <Col md='auto'>
            <div className='participant-list'>{this.renderParticipants()}</div>
          </Col>
        </Row>
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
