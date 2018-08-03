import React, { Component } from "react";

import Aux from "../Auxe/Auxe";
import MainMenu from "../../components/Navigation/MainMenu/MainMenu";
import MusicPlayer from "../../components/Music/MusicPlayer/MusicPlayer";

import "./Layout.css";

export default class Layout extends Component {
  state = {
    forcedSongOnMusicPlayer: null,
    showMusicPlayer: true
  };

  onForcePlaySong = song => {
    this.setState(() => ({ forcedSongOnMusicPlayer: song }));
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
          forcedSong={this.state.forcedSongOnMusicPlayer}
          show={this.state.showMusicPlayer}
          toggleShow={this.onToggleMusicPlayer}
          autoplay={true}
        />
        <h2
          style={{
            marginTop: this.state.showMusicPlayer ? "170px" : "20px"
          }}
        >
          Layout components
        </h2>
        <main className="container">{this.props.children}</main>
      </Aux>
    );
  }
}
