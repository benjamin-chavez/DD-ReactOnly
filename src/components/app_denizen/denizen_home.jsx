import React, { Component } from "react";
import { Link } from "react-router-dom";

class DenizenHome extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Home Page</h1>
          <p>
            The Denizen Designer Project documents the insights and experiences
            of individuals and collectives who have engaged design as a way to
            address social, economic, or political challenges in their local
            environments. We interviewed people from this project who come from
            a variety of backgrounds ranging from graphic design to architecture
            and consulting. Although their backgrounds and interpretations of
            design may be different, there is a common theme that participatory
            design and community work are fundamental aspects to ethical and
            transformative design. We hope these interviews bring more awareness
            to this type of work and a stronger network of Denizen Designers
            will be formed.{" "}
          </p>

          <p>
            <Link to='/denizendesigner/interviews'>
              Meet The Denizen Designers
            </Link>
            <br />
            <Link to='/denizendesigner/participantsindex'>
              Meet The Denizen Designers2
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default DenizenHome;
