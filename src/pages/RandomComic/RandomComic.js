import { Button } from "semantic-ui-react";
import { Spin } from "antd";
import React, { Component } from "react";

import "./RandomComic.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class RandomComic extends Component {
  state = {
    comicImageIsLoaded: false
  };

  componentDidMount() {
    if (this.props.numberOfMassiveAPIRequests === 0)
      this.props.requestEverythingFromInternet();
  }

  getNewComic = () => {
    this.props.requestComic();
  };

  onComicImageLoad = () => {
    if (!this.state.comicImageIsLoaded) {
      this.setState(() => ({
        comicImageIsLoaded: true
      }));
    }
  };

  render() {
    let comic = null;
    if (this.props.loadingComic) {
      comic = <Spin style={{ marginTop: "100px" }} />;
    } else if (this.props.comic) {
      comic = (
        <div className="RandomComic__Comic">
          <h2>{this.props.comic.title}</h2>
          {this.state.comicImageIsLoaded || (
            <h5>(Note that the image can take seconds to load)</h5>
          )}
          <img
            src={this.props.comic.img}
            alt={this.props.comic.alt}
            onLoad={this.onComicImageLoad}
          />
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
    loadingComic: state.internet.loadingComic,
    numberOfMassiveAPIRequests: state.internet.numberOfMassiveAPIRequests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestComic: () => dispatch(actions.requestComic()),
    requestEverythingFromInternet: () =>
      dispatch(actions.requestEverythingFromInternet())
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
