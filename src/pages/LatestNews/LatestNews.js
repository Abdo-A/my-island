import { connect } from "react-redux";
import { Spin } from "antd";
import React, { Component } from "react";

import * as actions from "../../store/actions/index";
import NewsCardsCollection from "../../components/News/NewsCardsCollection/NewsCardsCollection";
import NewsSlider from "../../components/News/NewsSlider/NewsSlider";

import "./LatestNews.css";

class LatestNews extends Component {
  state = {
    maximumNumberOfArticleCards: 15,
    maximumNumberOfArticleInSlider: 3
  };

  componentDidMount() {
    if (this.props.numberOfMassiveAPIRequests === 0)
      this.props.requestEverythingFromInternet();
  }

  render() {
    return (
      <div>
        <div>
          <NewsSlider
            articles={this.props.articles}
            maximumNumberOfArticleInSlider={
              this.state.maximumNumberOfArticleInSlider
            }
          />
        </div>

        {!this.props.articles ? (
          <Spin style={{ marginTop: "80px" }} />
        ) : (
          <NewsCardsCollection
            articles={this.props.articles}
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
    articles: state.internet.latestNews,
    numberOfMassiveAPIRequests: state.internet.numberOfMassiveAPIRequests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEverythingFromInternet: () =>
      dispatch(actions.requestEverythingFromInternet())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestNews);
