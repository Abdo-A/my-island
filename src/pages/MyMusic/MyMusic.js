import { List, Avatar } from "antd";
import React, { Component } from "react";

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
                alert("clicked song!");
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

export default MyMusic;
