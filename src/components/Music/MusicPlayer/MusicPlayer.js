import { Button, Card } from "antd";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import Drawer from '@material-ui/core/Drawer';
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
      nextProps.forcedSong !== null &&
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
          zIndex: MusicPlayerZIndex,
          paddingBottom: this.props.show ? "10px" : "0"
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
            preload="auto"
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
            <Card
              className="MusicPlayer__LyricsCard"
              style={{ display: this.state.showLyrics ? "block" : "none" }}
            >
              <div
                className="MusicPlayer__LyricsContainer"
                id="floatingAudioLyricsContainer"
              >
                {song.lyrics}
              </div>
            </Card>

            <Button
              type="primary"
              className="MusicPlayer__LyricsButton"
              onClick={this.onLyricsToggle}
            >
              Lyrics
            </Button>

            <Button onClick={() => this.navigateSong("next")}>
              Next <Icon name="forward" />
            </Button>
          </div>
        </div>






        <Drawer anchor="bottom" variant="permanent"
          style={{visibility:this.state.showLyrics?'visible':'hidden'}}>
          <div style={{width:'100%', backgroundColor:'red'}}>
            <span style={{width:'20%'}} className="MusicPlayer__Drawer__DesktopJustify"></span>
            <audio
            controls
            autoPlay={this.props.autoplay}
            preload="auto"
            style={{width:'80%', float:'right', borderRadius:'0px'}}
          >
              <source src={song.src} />
            Your browser does not support the audio tag.
            </audio>
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
