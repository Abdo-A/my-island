import React, { Component } from "react";
import Aux from "../Auxe/Auxe";

export default class Layout extends Component {
  render() {
    return (
      <Aux>
        <h2>Layout components</h2>
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}
