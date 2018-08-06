import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <div>
        <div>Intro</div>
        <h1>Welcome to your island..</h1>
        <h2>
          The only place online where you will be able to express yourself while
          getting the world's latest updates.
        </h2>
        <Link to="/home">Let me in</Link>
      </div>
    );
  }
}
