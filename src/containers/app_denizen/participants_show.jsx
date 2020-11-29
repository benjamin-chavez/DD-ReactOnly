import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchParticipant } from "../../actions";

export class ParticipantsShow extends Component {
  componentWillMount() {
    if (!this.props.participant) {
      this.props.fetchParticipant(this.props.match.params.id);
    }
  }
  render() {
    if (!this.props.participant) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <Link to='/denizendesigner/interviews'>Back</Link>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3'>Interviewee Picture*</div>
            <div className='col-sm-9'>
              <h2>
                {this.props.participant.first_name}{" "}
                {this.props.participant.last_name}
              </h2>
              <p>{this.props.participant.designer_type}</p>
              <p>{this.props.participant.bio}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const participant = reduxState.participants.find((p) => p.id === idFromUrl);
  return { participant };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchParticipant }, dispatch);
}

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(ParticipantsShow);
