import { Spin } from "antd";
import axios from "axios";
import React, { Component } from "react";

import { newsApiKey } from "../../data/apiKeys";
import NewsCard from "../../components/News/NewsCard/NewsCard";

import "./MyCountryNews.css";

class MyCountryNews extends Component {
  state = {
    userCountryName: null,
    userCountryCode: null,
    userCityName: null,
    newsLanguage: "en",
    newsApiKey: newsApiKey,
    articles: null,
    numberOfRequestedArticles: 25,
    maximumNumberOfViewedArticles: 18
  };

  componentDidMount() {
    //Getting the user's location information from the location api
    axios
      .get("https://geoip-db.com/json/")
      .then(res => {
        this.setState(
          () => ({
            userCountryName: res.data.country_name,
            userCountryCode: res.data.country_code,
            userCityName: res.data.city
          }),
          () => {
            //setState callback

            //getting headlines for userCountryCode
            axios
              .get(
                `https://newsapi.org/v2/top-headlines?country=${
                  this.state.userCountryCode
                }&language=${this.state.newsLanguage}&pageSize=${
                  this.state.numberOfRequestedArticles
                }&apiKey=${this.state.newsApiKey}`
              )
              .then(res => {
                console.log(res.data.articles);
                this.setState(() => ({
                  articles: res.data.articles
                }));
              });
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  mountedArticlesCount = 0;

  render() {
    let locationIndication = "";
    if (this.state.userCountryName) {
      locationIndication = (
        <h3>
          We can see that you are in{" "}
          {this.state.userCityName ? this.state.userCityName + ", " : null}
          {this.state.userCountryName}!
        </h3>
      );
    }

    let articlesToDisplay = "";

    if (this.state.articles) {
      articlesToDisplay = this.state.articles.map((article, index) => {
        if (
          article.title &&
          article.urlToImage &&
          article.url &&
          article.description &&
          article.publishedAt &&
          this.mountedArticlesCount < this.state.maximumNumberOfViewedArticles
        ) {
          this.mountedArticlesCount++;
          return (
            <span
              key={article.publishedAt}
              className="MyCountryNews__NewsCardWrapper"
            >
              <NewsCard
                key={article.url}
                title={article.title}
                image={article.urlToImage}
                url={article.url}
                description={article.description}
                date={article.publishedAt}
              />
            </span>
          );
        } else {
          return null;
        }
      });
    }

    return (
      <div>
        <div>{locationIndication || <Spin />}</div>
        <div
          style={{
            marginTop: "5vh",
            display: "flex",
            flexDirection: "row",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {articlesToDisplay || <Spin />}
        </div>
      </div>
    );
  }
}

export default MyCountryNews;
