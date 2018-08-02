import "./MusicPlayer.css";
import { Popover, Button, Icon } from "antd";

import React, { Component } from "react";
import songs from "../../../data/songs/songs";

export default class MusicPlayer extends Component {
  state = {
    currentSong: 0
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.forcedSong !== this.state.currentSong) {
      this.Audio.src = songs[nextProps.forcedSong].src;
      this.setState(() => ({
        currentSong: nextProps.forcedSong
      }));
    }
  }

  navigateSong = dir => {
    if (!(this.state.currentSong <= 0 && dir === "last"))
      this.setState(
        prevState => ({
          currentSong:
            dir === "next"
              ? (prevState.currentSong + 1) % songs.length
              : dir === "last"
                ? (prevState.currentSong - 1) % songs.length
                : ""
        }),
        () => {
          this.Audio.src = songs[this.state.currentSong].src;
        }
      );
  };

  render() {
    let song = songs[this.state.currentSong];
    return (
      <div className=".MusicPlayer">
        <strong>
          {song.name}
          {" - "}
          <i>{song.singer}</i>
        </strong>
        <br />
        <audio
          controls
          /*autoPlay*/ className=".Audio"
          ref={aud => (this.Audio = aud)}
          id="floatingSong"
        >
          <source src={song.src} />
          Your browser does not support the audio tag.
        </audio>
        <div>
          <Button
            onClick={() => this.navigateSong("last")}
            disabled={this.state.currentSong === 0}
          >
            <Icon type="left" />Last
          </Button>
          <Popover content={song.lyrics} title="Lyrics" trigger="click">
            <Button type="primary">Lyrics</Button>
          </Popover>
          <Button onClick={() => this.navigateSong("next")}>
            Next<Icon type="right" />
          </Button>
        </div>
      </div>
    );
  }
}

//navigating through songs in this component depends on the index of the song in the songs array
//not on the song's id

//expected props:
//forcedSong
