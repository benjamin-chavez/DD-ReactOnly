import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectDenizenTab, setNavSecondary } from "../../actions";

class NavSecondary extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedDenizenTab !== this.props.selectedDenizenTab) {
      this.props.fetchMessages(nextProps.selectedDenizenTab);
    }
  }

  handleClick = (denizenTab) => {
    this.props.selectDenizenTab(denizenTab);
  };

  renderDenizenTab = (denizenTab) => {
    return (
      <li
        key={denizenTab}
        // className={denizenTab === this.props.selecteddenizenTab ? 'active' : null}
        onClick={() => this.handleClick(denizenTab)}
        role='presentation'
      >
        #{denizenTab}
      </li>
    );
  };

  render() {
    return (
      <div className='col-sm-12'>
        <ul>
          {/* <li>Home</li>
          <li>Interviews</li>
          <li>Report</li>
          <li>Designer Database</li>
          <li>Quotes</li>
          <li>Resources</li> */}
          {this.props.denizenTabs.map(this.renderDenizenTab)}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      // setNavSecondary: setNavSecondary
      selectDenizenTab,
    },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    denizenTabs: reduxState.denizenTabs,
    NavSecondary: reduxState.NavSecondary,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(NavSecondary);
