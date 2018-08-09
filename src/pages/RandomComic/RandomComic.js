import { Button } from "semantic-ui-react";
import { Spin } from "antd";
import axios from "axios";
import React, { Component } from "react";

import axiosDatabase from "../../axios";

import "./RandomComic.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class RandomComic extends Component {
  state = {
    comicId: null,
    comic: null,
    loadingComic: false
  };

  componentDidMount() {
    this.getNewComic();
  }

  getNewComic = () => {
    this.props.requestComic();
    // this.setState(() => ({
    //   loadingComic: true
    // }));
    // axiosDatabase.get("/randomcomicid.json/").then(response => {
    //   const comicIdsArray = [];
    //   for (let key in response.data) {
    //     comicIdsArray.unshift(response.data[key]);
    //   }
    //   console.log("Comic Id", comicIdsArray[0]);
    //   let currentComicId = comicIdsArray[0] % 2028;
    //   this.setState(
    //     () => ({
    //       comicId: currentComicId
    //     }),
    //     () => {
    //       axios
    //         .get(
    //           `https://cors.io/?https://xkcd.com/${
    //             this.state.comicId
    //           }/info.0.json`
    //         )
    //         .then(response => {
    //           let comic = {
    //             title: response.data.title,
    //             text: response.data.transcript,
    //             alt: response.data.alt,
    //             img: response.data.img
    //           };
    //           this.setState(
    //             () => ({
    //               comic: comic
    //             }),
    //             () => {
    //               this.setState(() => ({
    //                 loadingComic: false
    //               }));
    //               axiosDatabase
    //                 .post("/randomcomicid.json", this.state.comicId + 1)
    //                 .then(respose => {});
    //             }
    //           );
    //         });
    //     }
    //   );
    // });
  };
  render() {
    let comic = null;
    if (this.props.loadingComic) {
      comic = <Spin style={{ marginTop: "100px" }} />;
    } else if (this.props.comic) {
      comic = (
        <div className="RandomComic__Comic">
          <h2>{this.props.comic.title}</h2>
          {<img src={this.props.comic.img} alt={this.props.comic.alt} />}
        </div>
      );
    }
    return (
      <div className="RandomComic">
        <Button
          onClick={this.getNewComic}
          className="RandomComic__LoadNewComicButton"
          loading={this.props.loadingComic}
          disabled={this.props.loadingComic}
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

const mapStateToProps = state => {
  return {
    comic: state.internet.randomComic,
    loadingComic: state.internet.loadingComic
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestComic: () => dispatch(actions.requestComic())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomComic);

/*
  Random comic
  https://xkcd.com/1/info.0.json
  (from 1 until 2028)
  //on production, start from comic 26, cuz 26 and after are more funny
  When calling it, I used the https://cors.io/? prefix to avoid any cors issues
*/
