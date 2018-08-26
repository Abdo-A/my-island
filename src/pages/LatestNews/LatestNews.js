import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { Spin } from "antd";
import React, { Component } from "react";

import * as actions from "../../store/actions/index";
import NewsCardsCollection from "../../components/News/NewsCardsCollection/NewsCardsCollection";
//import NewsSlider from "../../components/News/NewsSlider/NewsSlider";

import "./LatestNews.css";

class LatestNews extends Component {
  state = {
    maximumNumberOfArticleCards: 15,
    maximumNumberOfArticleInSlider: 3,
    chosenNewsGenre: "general",
    firstLoad: true,

    //To make sure that we request a genre news only once
    numberOfSportsRequests: 0,
    numberOfTechnologyRequests: 0,
    numberOfNatureRequests: 0
  };

  componentDidMount() {
    if (this.props.numberOfMassiveAPIRequests === 0) {
      this.props.requestEverythingFromInternet();
    }
  }

  handleChooseGenre = (e, { name }) => {
    if (name === "general") {
      //this.props.requestLatestNews("general");
    } else if (name === "sports") {
      if (this.state.numberOfSportsRequests === 0)
        this.props.requestLatestNews("sports");

      this.setState(prevState => ({
        numberOfSportsRequests: prevState.numberOfSportsRequests + 1
      }));
    } else if (name === "technology") {
      if (this.state.numberOfTechnologyRequests === 0)
        this.props.requestLatestNews("technology");

      this.setState(prevState => ({
        numberOfTechnologyRequests: prevState.numberOfTechnologyRequests + 1
      }));
    } else if (name === "nature") {
      if (this.state.numberOfNatureRequests === 0)
        this.props.requestLatestNews("nature");

      this.setState(prevState => ({
        numberOfNatureRequests: prevState.numberOfNatureRequests + 1
      }));
    }
    this.setState({ chosenNewsGenre: name, firstLoad: false });
  };

  render() {
    let articles = this.state.firstLoad
      ? this.props.generalArticles
      : this.state.chosenNewsGenre === "sports"
        ? this.props.sportsArticles
        : this.state.chosenNewsGenre === "technology"
          ? this.props.technologyArticles
          : this.state.chosenNewsGenre === "nature"
            ? this.props.natureArticles
            : this.props.generalArticles;

    return (
      <div>
        <Menu
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Menu.Item
            name="general"
            active={this.state.chosenNewsGenre === "general"}
            onClick={this.handleChooseGenre}
          >
            General
          </Menu.Item>

          <Menu.Item
            name="technology"
            active={this.state.chosenNewsGenre === "technology"}
            onClick={this.handleChooseGenre}
          >
            Technology
          </Menu.Item>

          <Menu.Item
            name="sports"
            active={this.state.chosenNewsGenre === "sports"}
            onClick={this.handleChooseGenre}
          >
            Sports
          </Menu.Item>
          <Menu.Item
            name="nature"
            active={this.state.chosenNewsGenre === "nature"}
            onClick={this.handleChooseGenre}
          >
            Nature
          </Menu.Item>
        </Menu>

        {/*
        <div>
          <NewsSlider
            articles={articles}
            maximumNumberOfArticleInSlider={
              this.state.maximumNumberOfArticleInSlider
            }
          />
        </div>
        */}

        {!articles ? (
          <Spin style={{ marginTop: "80px" }} />
        ) : (
          <NewsCardsCollection
            articles={articles}
            maximumNumberOfArticleCards={this.state.maximumNumberOfArticleCards}
            maximumNumberOfArticleInSlider={
              this.state.maximumNumberOfArticleInSlider
            }
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    generalArticles: state.internet.latestNews,
    sportsArticles: state.internet.latestNewsSports,
    technologyArticles: state.internet.latestNewsTechnology,
    natureArticles: state.internet.latestNewsNature,

    numberOfMassiveAPIRequests: state.internet.numberOfMassiveAPIRequests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEverythingFromInternet: () =>
      dispatch(actions.requestEverythingFromInternet()),
    requestLatestNews: newsType => dispatch(actions.requestLatestNews(newsType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestNews);
