import { connect } from "react-redux";
import { Spin } from "antd";
import axios from "axios";
import React, { Component } from "react";

import { newsApiKey } from "../../data/apiKeys";
import * as actionTypes from "../../store/actions";
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
    //If the user location information is not in the redux store:

    if (!this.props.userCountryName)
      //Getting the user's location information from the location api
      axios
        .get("https://geoip-db.com/json/")
        .then(res => {
          this.props.setUserLocationInfo({
            userCountryName: res.data.country_name,
            userCountryCode: res.data.country_code,
            userCityName: res.data.city
          });
          //setState callback

          //getting headlines for userCountryCode
          axios
            .get(
              `https://newsapi.org/v2/top-headlines?country=${
                this.props.userCountryCode
              }&language=${this.state.newsLanguage}&pageSize=${
                this.state.numberOfRequestedArticles
              }&apiKey=${this.state.newsApiKey}`
            )
            .then(res => {
              this.setState(() => ({
                articles: res.data.articles
              }));
            });
        })
        .catch(err => {
          console.log(err);
        });

    //If the user location information is in the redux store:

    if (this.props.userCountryName) {
      //getting headlines for userCountryCode
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=${
            this.props.userCountryCode
          }&language=${this.state.newsLanguage}&pageSize=${
            this.state.numberOfRequestedArticles
          }&apiKey=${this.state.newsApiKey}`
        )
        .then(res => {
          this.setState(() => ({
            articles: res.data.articles
          }));
        });
    }
  }

  render() {
    let locationIndication = "";
    if (this.props.userCountryName) {
      locationIndication = (
        <h3 className="MyCountryNews__LocationIndication">
          {" "}
          <strong>
            {this.props.userCityName ? this.props.userCityName + ", " : null}
            {this.props.userCountryName}
          </strong>
        </h3>
      );
    }

    return (
      <div>
        <div>
          Latest news in{locationIndication || (
            <span style={{ marginTop: "30px" }}>
              ...<Spin style={{ marginLeft: "40px" }} />
              <br />
              <br />
              <br />
              <h5>
                (Fetching your city info, if might take a while at the first
                time)
              </h5>
            </span>
          )}
        </div>

        <div>
          {!this.state.articles ? (
            <Spin
              style={{ marginTop: window.innerWidth < 800 ? "120px" : "300px" }}
            />
          ) : (
            <NewsSlider
              articles={this.state.articles}
              maximumNumberOfArticleInSlider={
                this.state.maximumNumberOfArticleInSlider
              }
            />
          )}
        </div>

        {!this.state.articles ? (
          <Spin
            style={{ marginTop: window.innerWidth < 800 ? "60px" : "250px" }}
          />
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

const mapStateToProps = state => {
  return {
    userCountryName: state.userCountryName,
    userCountryCode: state.userCountryCode,
    userCityName: state.userCityName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserLocationInfo: info =>
      dispatch({ type: actionTypes.SET_USER_LOCATION_INFO, ...info })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCountryNews);
