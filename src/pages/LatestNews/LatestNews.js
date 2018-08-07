import { Spin } from "antd";
import axios from "axios";
import React, { Component } from "react";

import { newsApiKey } from "../../data/apiKeys";
import NewsCardsCollection from "../../components/News/NewsCardsCollection/NewsCardsCollection";
import NewsSlider from "../../components/News/NewsSlider/NewsSlider";

import "./LatestNews.css";

class LatestNews extends Component {
  state = {
    articles: null,
    newsApiKey: newsApiKey,
    newsLanguage: "en",
    numberOfRequestedArticles: 30,
    maximumNumberOfArticleCards: 15,
    maximumNumberOfArticleInSlider: 3
  };

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?language=${
          this.state.newsLanguage
        }&apiKey=${this.state.newsApiKey}`
      )
      .then(res => {
        this.setState(() => ({
          articles: res.data.articles
        }));
      })
      .catch(error => error);
  }

  render() {
    return (
      <div>
        <div>
          <NewsSlider
            articles={this.state.articles}
            maximumNumberOfArticleInSlider={
              this.state.maximumNumberOfArticleInSlider
            }
          />
        </div>

        {!this.state.articles ? (
          <Spin style={{ marginTop: "80px" }} />
        ) : (
          <NewsCardsCollection
            articles={this.state.articles}
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

export default LatestNews;
