import React, { Component } from "react";

class Resources extends Component {
  render() {
    if (!this.props) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div>
          <h1>Resources Page</h1>
          <h3>Articles</h3>
          <hr />
        </div>
        <div>
          <h3>Publication</h3>
          <hr />
        </div>
      </div>
    );
  }
}

export default Resources;
