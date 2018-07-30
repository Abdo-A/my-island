import React, { Component } from "react";

import Aux from "../Auxe/Auxe";
import MainMenu from "../../components/Navigation/MainMenu/MainMenu";

import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <Aux>
        <h2>Layout components</h2>
        <MainMenu location={this.props.location} />
        <main className="container">{this.props.children}</main>
      </Aux>
    );
  }
}
