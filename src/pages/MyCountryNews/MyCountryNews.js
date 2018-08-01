import { Spin } from "antd";
import axios from "axios";
import React, { Component } from "react";

import { newsApiKey } from "../../data/apiKeys";
import NewsCardsCollection from "../../components/News/NewsCardsCollection/NewsCardsCollection";
import NewsSlider from "../../components/News/NewsSlider/NewsSlider";

import "./MyCountryNews.css";

class MyCountryNews extends Component {
  state = {
    userCountryName: null,
    userCountryCode: null,
    userCityName: null,
    newsLanguage: "en",
    newsApiKey: newsApiKey,
    articles: null,
    numberOfRequestedArticles: 30,
    maximumNumberOfArticleCards: 15,
    maximumNumberOfArticleInSlider: 3
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

  render() {
    let locationIndication = "";
    if (this.state.userCountryName) {
      locationIndication = (
        <h3 className="MyCountryNews__LocationIndication">
          Latest news from{" "}
          <strong>
            {this.state.userCityName ? this.state.userCityName + ", " : null}
            {this.state.userCountryName}
          </strong>
        </h3>
      );
    }

    return (
      <div>
        <div>
          {locationIndication || <Spin style={{ marginTop: "40px" }} />}
        </div>

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

export default MyCountryNews;
