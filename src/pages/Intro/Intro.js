import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <div>
        <div>Intro</div>
        <Link to="/home">Let me in</Link>
      </div>
    );
  }
}
