import React, { Component } from "react";
import axios from "axios";
import { Spin } from "antd";
import { newsApiKey } from "../../data/apiKeys";
import NewsCard from "../../components/News/NewsCard/NewsCard";

class MyCountryNews extends Component {
  state = {
    userCountryName: null,
    userCountryCode: null,
    userCityName: null,
    newsLanguage: "en",
    newsApiKey: newsApiKey,
    articles: null
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
                }&language=${this.state.newsLanguage}&apiKey=${
                  this.state.newsApiKey
                }`
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
        <h3>
          We can see that you are in{" "}
          {this.state.userCityName ? this.state.userCityName + ", " : null}
          {this.state.userCountryName}!
        </h3>
      );
    }

    let articlesToDisplay = "";
    if (this.state.articles) {
      articlesToDisplay = this.state.articles.map(article => {
        if (
          article.title &&
          article.urlToImage &&
          article.url &&
          article.description &&
          article.publishedAt
        ) {
          return (
            <span style={{ width: window.innerWidth > 800 ? "33%" : "100%" }}>
              <NewsCard
                key={article.publishedAt}
                title={article.title}
                image={article.urlToImage}
                url={article.url}
                description={article.description}
                date={article.publishedAt}
              />
            </span>
          );
        } else {
          return;
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
