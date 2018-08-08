import React, { Component } from "react";

import Aux from "../Auxe/Auxe";
import MainMenu from "../../components/Navigation/MainMenu/MainMenu";
import MusicPlayer from "../../components/Music/MusicPlayer/MusicPlayer";

import "./Layout.css";

export default class Layout extends Component {
  state = {
    showMusicPlayer: true
  };

  onToggleMusicPlayer = () => {
    this.setState(prevState => ({
      showMusicPlayer: !prevState.showMusicPlayer
    }));
  };

  render() {
    return (
      <Aux>
        <MainMenu location={this.props.location} />
        <MusicPlayer
          show={this.state.showMusicPlayer}
          toggleShow={this.onToggleMusicPlayer}
          autoplay={false}
        />
        <main
          className="container"
          style={{
            marginTop: this.state.showMusicPlayer ? "170px" : "40px"
          }}
        >
          {this.props.children}
        </main>
      </Aux>
    );
  }
}
