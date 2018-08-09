import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import { Popover, Button } from "antd";
import React, { Component } from "react";
import withSizes from "react-sizes";

import { MusicPlayerZIndex } from "../../../data/z-indices";
import songs from "../../../data/songs/songs";

import "./MusicPlayer.css";

let maxScreenSizeForHorizontalLyrics = 1050;

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
          document
            .getElementById("floatingAudioLyricsContainer")
            .scrollTo(0, 0);
        }
      );
  };

  onLyricsToggle = () => {
    this.setState(prevState => ({
      showLyrics: !prevState.showLyrics
    }));
  };

  onMusicIconClick = () => {
    this.setState(() => ({
      showLyrics: this.props.screenWidth > 1050 ? true : false
    }));
    this.props.toggleShow();
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
        <div
          className="MusicPlayer__Body"
          style={{ display: this.props.show ? "block" : "none" }}
        >
          <strong className="MusicPlayer__SongInfo">
            {song.name}
            {this.props.screenWidth < 800 ? <br /> : " - "}
            <i>{song.singer}</i>
          </strong>
          <br />
          <audio
            controls
            autoPlay={this.props.autoplay}
            className="MusicPlayer__Audio"
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
              <Icon name="backward" />
              Last
            </Button>

            <Popover
              placement={
                this.props.screenWidth > maxScreenSizeForHorizontalLyrics
                  ? "left"
                  : "bottom"
              }
              content={
                <div
                  className="MusicPlayer__LyricsContainer"
                  id="floatingAudioLyricsContainer"
                >
                  {song.lyrics}
                </div>
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
            </Popover>

            <Button onClick={() => this.navigateSong("next")}>
              Next <Icon name="forward" />
            </Button>
          </div>
        </div>

        <Icon
          name="music"
          size="big"
          circular
          inverted
          className="MusicPlayer__ToggleIcon"
          onClick={this.onMusicIconClick}
        />
      </div>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  screenWidth: width
});

const mapStateToProps = state => {
  return {
    forcedSong: state.basic.forcedSongOnMusicPlayer
  };
};

export default connect(mapStateToProps)(
  withSizes(mapSizesToProps)(MusicPlayer)
);

//navigating through songs in this component depends on the index of the song in the songs array
//not on the song's id

//expected props:
//forcedSong, autoplay
