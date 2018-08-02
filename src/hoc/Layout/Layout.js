import React, { Component } from "react";

import Aux from "../Auxe/Auxe";
import MainMenu from "../../components/Navigation/MainMenu/MainMenu";
import MusicPlayer from "../../components/Music/MusicPlayer/MusicPlayer";

import "./Layout.css";

export default class Layout extends Component {
  state = {
    forcedSong: null
  };

  forcePlaySong = song => {
    this.setState(() => ({ forcedSong: song }));
  };

  render() {
    return (
      <Aux>
        <MainMenu location={this.props.location} />
        <MusicPlayer forcedSong={this.state.forcedSong} />
        <button onClick={() => this.forcePlaySong("8")}>Force</button>
        <h2>Layout components</h2>
        <main className="container">{this.props.children}</main>
      </Aux>
    );
  }
}
