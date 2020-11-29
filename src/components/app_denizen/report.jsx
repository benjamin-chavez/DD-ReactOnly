import React, { Component } from "react";

class Report extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-sm-4'>
          <ul>
            <li>Executive Summary</li>
            <li>Introduction</li>
            <li>I. Header</li>
            <li>II. Header</li>
            <li>III. Header</li>
            <li>IV. Header</li>
            <li>Conclusion & Key Recommendations</li>
            <li>Bibliography</li>
          </ul>
        </div>
        <div className='col-sm-8'>
          <h1>Report Page</h1>
          <p></p>
        </div>
      </div>
    );
  }
}

export default Report;
