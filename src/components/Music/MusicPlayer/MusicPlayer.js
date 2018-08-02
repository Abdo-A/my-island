import { Popover, Button, Icon, Card } from "antd";
import React, { Component } from "react";
import withSizes from "react-sizes";

import { MusicPlayerZIndex } from "../../../data/z-indices";
import songs from "../../../data/songs/songs";

import "./MusicPlayer.css";

let maxScreenSizeForHorizontalLyrics = 1040;

class MusicPlayer extends Component {
  state = {
    currentSong: 0,
    showLyrics:
      this.props.screenWidth > maxScreenSizeForHorizontalLyrics ? true : false
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.forcedSong &&
      nextProps.forcedSong !== this.state.currentSong &&
      nextProps.forcedSong !== this.props.forcedSong
    ) {
      document.getElementById("floatingAudio").src =
        songs[nextProps.forcedSong].src;
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
          document.getElementById("floatingAudio").src =
            songs[this.state.currentSong].src;
        }
      );
  };

  onLyricsToggle = () => {
    this.setState(prevState => ({
      showLyrics: !prevState.showLyrics
    }));
  };

  render() {
    let song = songs[this.state.currentSong];
    return (
      <div
        className="MusicPlayer"
        style={{
          zIndex: MusicPlayerZIndex
        }}
      >
        <strong>
          {song.name}
          {" - "}
          <i>{song.singer}</i>
        </strong>
        <br />
        <audio
          controls
          autoPlay={this.props.autoplay}
          className="Audio"
          id="floatingAudio"
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
          {/*
          <Popover
            placement={this.props.screenWidth > 1040 ? "left" : "bottom"}
            content={
              <div className="MusicPlayer__LyricsContainer">{song.lyrics}</div>
            }
            title="Lyrics"
            trigger="click"
            visible={this.state.showLyrics}
          >
            <Button
              type="primary"
              className="MusicPlayer__LyricsButton"
              onClick={this.onLyricsToggle}
            >
              Lyrics
            </Button>
          </Popover>*/}
          <Button
            type="primary"
            className="MusicPlayer__LyricsButton"
            onClick={this.onLyricsToggle}
          >
            Lyrics
          </Button>
          <Card
            className="MusicPlayer__LyricsCard"
            style={{
              display: this.state.showLyrics ? "block" : "none"
            }}
          >
            <div className="MusicPlayer__LyricsContainer">{song.lyrics}</div>
          </Card>

          <Button onClick={() => this.navigateSong("next")}>
            Next<Icon type="right" />
          </Button>
        </div>
      </div>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  screenWidth: width
});

export default withSizes(mapSizesToProps)(MusicPlayer);

//navigating through songs in this component depends on the index of the song in the songs array
//not on the song's id

//expected props:
//forcedSong, autoplay
