import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setNavSecondary } from "../actions";

class NavSecondary extends Component {
  componentWillMount() {
    this.props.setNavSecondary();
  }

  render() {
    return (
      <div className='col-sm-12'>
        <ul>
          <li>Home</li>
          <li>Interviews</li>
          <li>Report</li>
          <li>Designer Database</li>
          <li>Quotes</li>
          <li>Resources</li>
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setNavSecondary: setNavSecondary }, dispatch);
}

function mapReduxStateTOProps(reduxState) {
  return {
    NavSecondary: reduxState.NavSecondary,
  };
}

export default connect(null, mapDispatchToProps)(NavSecondary);
