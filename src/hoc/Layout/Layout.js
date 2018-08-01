import React, { Component } from "react";

import Aux from "../Auxe/Auxe";
import MainMenu from "../../components/Navigation/MainMenu/MainMenu";

import "./Layout.css";

export default class Layout extends Component {
  state = {
    dim: false
  };

  onMainMenuAction = showOrHide => {
    this.setState(() => ({
      dim: showOrHide === "show" ? true : false
    }));
  };

  render() {
    return (
      <Aux>
        <MainMenu
          location={this.props.location}
          onMainMenuAction={this.onMainMenuAction}
        />
        <h2>Layout components</h2>
        <main className="container">{this.props.children}</main>
      </Aux>
    );
  }
}
