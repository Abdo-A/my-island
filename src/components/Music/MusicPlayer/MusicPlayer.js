import { Popover } from "antd";
import { connect } from "react-redux";
import { Icon, Button } from "semantic-ui-react";
import Drawer from "@material-ui/core/Drawer";
import React, { Component } from "react";
import withSizes from "react-sizes";

import { MusicPlayerZIndex } from "../../../data/z-indices";
import songs from "../../../data/songs/songs";

import "./MusicPlayer.css";

class MusicPlayer extends Component {
  state = {
    currentSong: 0,
    showControllers: this.props.screenWidth > 850 ? true : false,
    showMusicPlayer: true
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.forcedSong !== null &&
      nextProps.forcedSong !== this.state.currentSong &&
      nextProps.forcedSong !== this.props.forcedSong
    ) {
      document.getElementById("drawerAudio").src =
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
          document.getElementById("drawerAudio").src =
            songs[this.state.currentSong].src;
          if (document.getElementById("drawerAudioLyricsContainer")) {
            document
              .getElementById("drawerAudioLyricsContainer")
              .scrollTo(0, 0);
          }
        }
      );
  };

  onMusicIconClick = () => {
    this.setState(prevState => ({
      showControllers: !prevState.showControllers
    }));
  };

  showOrHideMusicPlayer = showOrHide => {
    this.setState(() => ({
      showMusicPlayer: showOrHide === "show" ? true : false
    }));
  };

  render() {
    let song = songs[this.state.currentSong];

    const lyricsContainer = (
      <div
        id="drawerAudioLyricsContainer"
        className="MusicPlayer__LyricsContainer"
      >
        {song.lyrics}
      </div>
    );

    const controlButtons = (
      <div>
        <Button
          onClick={() => this.navigateSong("last")}
          color="grey"
          size="tiny"
          disabled={this.state.currentSong === 0}
        >
          <Icon name="backward" />
          Last
        </Button>

        <Popover
          content={lyricsContainer}
          title="Lyrics"
          trigger="click"
          style={{ marginLeft: "20px" }}
        >
          <Button
            className="MusicPlayer__LyricsButton"
            size="tiny"
            disabled={!song.lyrics}
          >
            Lyrics
          </Button>
        </Popover>

        <Button
          onClick={() => this.navigateSong("next")}
          color="grey"
          size="tiny"
        >
          Next <Icon name="forward" />
        </Button>

        <Button
          size="mini"
          title="Show music player"
          color="green"
          style={{
            display: this.state.showMusicPlayer ? "none" : "block",
            margin: "10px auto 0 auto"
          }}
          onClick={() => this.showOrHideMusicPlayer("show")}
        >
          Music Player
        </Button>
      </div>
    );

    return (
      <div
        className="MusicPlayer"
        style={{
          zIndex: MusicPlayerZIndex
        }}
      >
        <div
          className="MusicPlayer__Body"
          style={{ display: this.state.showControllers ? "block" : "none" }}
        >
          <strong className="MusicPlayer__SongInfo">
            {song.name}
            {this.props.screenWidth < 800 ? <br /> : " - "}
            <i>{song.singer}</i>
          </strong>
          <br />
          <br />
          <span>{controlButtons}</span>
        </div>

        <Drawer
          anchor="bottom"
          variant="permanent"
          style={{
            visibility: this.state.showMusicPlayer ? "visible" : "hidden"
          }}
        >
          <div style={{ width: "100%", backgroundColor: "#1B1C1D" }}>
            <span
              className="MusicPlayer__Drawer__DesktopJustify"
              style={{
                width:
                  this.props.screenWidth < 800 || !this.props.mainMenuVisible
                    ? "0"
                    : "150px"
              }}
            />
            <div
              style={{
                float: "right",
                width:
                  this.props.screenWidth < 800 || !this.props.mainMenuVisible
                    ? this.props.screenWidth + "px"
                    : this.props.screenWidth - 150 + "px"
              }}
              className="MusicPlayer__Drawer__Container"
            >
              <div
                style={{
                  backgroundColor: "#f1f3f4",
                  width: "100%",
                  float: "left",
                  margin: "0",
                  padding: "0",
                  height: "100%",
                  position: "relative"
                }}
                className="MusicPlayer__Drawer__AudioContainer"
              >
                <audio
                  controls
                  loop
                  autoPlay={this.props.autoplay}
                  preload="auto"
                  style={{ width: "100%" }}
                  id="drawerAudio"
                >
                  <source src={song.src} />
                  Your browser does not support the audio tag.
                </audio>
              </div>

              <Icon
                title="Hide music player"
                name="close"
                onClick={() => this.showOrHideMusicPlayer("hide")}
                style={{
                  cursor: "pointer",
                  margin: "0",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  right: "0"
                }}
              />

              <strong
                className="MusicPlayer__SongInfo"
                style={{
                  margin: "0",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  color: "#0000007a",
                  width: "100%"
                }}
              >
                {song.name} -{" "}
                <i style={{ fontFamily: "serif" }}>{song.singer}</i>
              </strong>
            </div>
          </div>
        </Drawer>

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
    forcedSong: state.basic.forcedSongOnMusicPlayer,
    mainMenuVisible: state.basic.mainMenuVisible
  };
};

export default connect(mapStateToProps)(
  withSizes(mapSizesToProps)(MusicPlayer)
);

//navigating through songs in this component depends on the index of the song in the songs array
//not on the song's id

//expected props:
//forcedSong, autoplay
