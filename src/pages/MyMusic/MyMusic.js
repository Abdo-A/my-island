import { connect } from "react-redux";
import { List, Avatar } from "antd";
import React, { Component } from "react";

import * as actions from "../../store/actions/index";
import songs from "../../data/songs/songs";

import "./MyMusic.css";

class MyMusic extends Component {
  render() {
    return (
      <div>
        <List
          className="MyMusic__MusicList"
          itemLayout="horizontal"
          dataSource={songs}
          renderItem={song => (
            <List.Item
              className="MyMusic__MusicItem"
              onClick={() => {
                const songIndex = songs.findIndex(item => item.id === song.id);
                this.props.forceSongOnMusicPlayer(songIndex);
              }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<strong>{song.name}</strong>}
                description={<span>{song.singer}</span>}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    forceSongOnMusicPlayer: index =>
      dispatch(actions.setForcedSongOnMusicPlayer(index))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MyMusic);
