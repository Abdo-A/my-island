import { Button } from "semantic-ui-react";
import { Spin } from "antd";
import axios from "axios";
import React, { Component } from "react";

import axiosDatabase from "../../axios";

import "./RandomComic.css";

class RandomComic extends Component {
  state = {
    comicId: null,
    comic: null,
    loadingaComic: false
  };

  componentDidMount() {
    this.getNewComic();
  }

  getNewComic = () => {
    this.setState(() => ({
      loadingaComic: true
    }));
    axiosDatabase.get("/randomcomicid.json/").then(response => {
      const comicIdsArray = [];
      for (let key in response.data) {
        comicIdsArray.unshift(response.data[key]);
      }
      console.log(comicIdsArray[0]);
      let currentComicId = comicIdsArray[0] % 2028;
      this.setState(
        () => ({
          comicId: currentComicId
        }),
        () => {
          axios
            .get(
              `https://cors.io/?https://xkcd.com/${
                this.state.comicId
              }/info.0.json`
            )
            .then(response => {
              let comic = {
                title: response.data.title,
                text: response.data.transcript,
                alt: response.data.alt,
                img: response.data.img
              };
              this.setState(
                () => ({
                  comic: comic
                }),
                () => {
                  this.setState(() => ({
                    loadingaComic: false
                  }));
                  axiosDatabase
                    .post("/randomcomicid.json", this.state.comicId + 1)
                    .then(respose => {});
                }
              );
            });
        }
      );
    });
  };
  render() {
    let comic = null;
    if (this.state.loadingaComic) {
      comic = <Spin style={{ marginTop: "100px" }} />;
    } else if (this.state.comic) {
      comic = (
        <div className="RandomComic__Comic">
          <h2>{this.state.comic.title}</h2>
          {<img src={this.state.comic.img} alt={this.state.comic.alt} />}
        </div>
      );
    }
    return (
      <div className="RandomComic">
        <Button
          onClick={this.getNewComic}
          className="RandomComic__LoadNewComicButton"
          loading={this.state.loadingaComic}
          disabled={this.state.loadingaComic}
          color="violet"
        >
          New Comic
        </Button>
        <br />
        <div>{comic || <Spin style={{ marginTop: "100px" }} />}</div>
      </div>
    );
  }
}

export default RandomComic;

/*
  Random comic
  https://xkcd.com/1/info.0.json
  (from 1 until 2028)
  //on production, start from comic 26, cuz 26 and after are more funny
  When calling it, I used the https://cors.io/? prefix to avoid any cors issues
*/
