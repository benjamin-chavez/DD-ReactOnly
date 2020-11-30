import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectDenizenTab, setNavSecondaryz } from "../../actions";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class NavSecondary extends Component {
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.selectedDenizenTab !== this.props.selectedDenizenTab) {
  //     this.props.fetchMessages(nextProps.selectedDenizenTab);
  //   }
  // }

  handleClick = (denizenTab) => {
    this.props.selectDenizenTab(denizenTab);
  };

  renderDenizenTab = (denizenTab) => {
    return (
      <li
        key={denizenTab}
        onClick={() => this.handleClick(denizenTab)}
        role='presentation'
      >
        <Link
          to={`/denizendesigner/` + denizenTab.replace(/ /g, "").toLowerCase()}
        >
          {denizenTab}
        </Link>
      </li>
    );
  };

  render() {
    return (
      <div className='Nav-Secondary'>
        <Container>
          <Row>
            <Col>
              <div>
                <ul className='List-Inline'>
                  {this.props.denizenTabs.map(this.renderDenizenTab)}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
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
