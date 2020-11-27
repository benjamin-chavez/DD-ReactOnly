// rce
import React, { Component } from "react";

class Participant extends Component {
  render() {
    return (
      <div className='participant card'>
        <div className='card-description'>
          <h2>{this.props.participant.first_name}</h2>
          <p>{this.props.participant.last_name}</p>
          <p>test</p>
        </div>
      </div>
    );
  }
}

export default Participant;
