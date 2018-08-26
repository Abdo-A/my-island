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
    articles: null,
    chosenNewsGenre: "general",
    firstLoad: true
  };

  componentDidMount() {
    if (this.props.numberOfMassiveAPIRequests === 0) {
      this.props.requestEverythingFromInternet();
    }
  }

  handleChooseGenre = (e, { name }) => {
    if (name === "general") {
      //this.props.requestLatestNews("general");

      this.setState(() => ({
        articles: this.props.generalArticles
      }));
    } else if (name === "sports") {
      this.props.requestLatestNews("sports");

      this.setState(() => ({
        articles: this.props.sportsArticles
      }));
    } else if (name === "technology") {
      this.props.requestLatestNews("technology");

      this.setState(() => ({
        articles: this.props.technologyArticles
      }));
    } else if (name === "nature") {
      this.props.requestLatestNews("nature");

      this.setState(() => ({
        articles: this.props.natureArticles
      }));
    }
    this.setState({ chosenNewsGenre: name, firstLoad: false });
  };

  render() {
    let articles = this.state.firstLoad
      ? this.props.generalArticles
      : this.state.articles;

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
