import { connect } from "react-redux";
import { Spin } from "antd";
import axios from "axios";
import React, { Component } from "react";

import { newsApiKey } from "../../data/apiKeys";
import * as actions from "../../store/actions/index";
import * as actionTypes from "../../store/actions/actionTypes";
import NewsCardsCollection from "../../components/News/NewsCardsCollection/NewsCardsCollection";
import NewsSlider from "../../components/News/NewsSlider/NewsSlider";

import "./MyCountryNews.css";

class MyCountryNews extends Component {
  state = {
    maximumNumberOfArticleCards: 15,
    maximumNumberOfArticleInSlider: 3
  };

  componentDidMount() {
    this.props.requestUserLocationInfoAndRequestMyCountryNews();
    //If the user location information is not in the redux store:
    // if (!this.props.userCountryName)
    //   //Getting the user's location information from the location api
    //   axios
    //     .get("https://geoip-db.com/json/")
    //     .then(res => {
    //       this.props.setUserLocationInfo({
    //         userCountryName: res.data.country_name,
    //         userCountryCode: res.data.country_code,
    //         userCityName: res.data.city
    //       });
    //       //setState callback
    //       //getting headlines for userCountryCode
    //       axios
    //         .get(
    //           `https://newsapi.org/v2/top-headlines?country=${
    //             this.props.userCountryCode
    //           }&language=en&apiKey=${this.state.newsApiKey}`
    //         )
    //         .then(res => {
    //           this.setState(() => ({
    //             articles: res.data.articles
    //           }));
    //         });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // //If the user location information is in the redux store:
    // if (this.props.userCountryName) {
    //   //getting headlines for userCountryCode
    //   axios
    //     .get(
    //       `https://newsapi.org/v2/top-headlines?country=${
    //         this.props.userCountryCode
    //       }&language=en&apiKey=${this.state.newsApiKey}`
    //     )
    //     .then(res => {
    //       this.setState(() => ({
    //         articles: res.data.articles
    //       }));
    //     });
    // }
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
          Latest news in
          {locationIndication || (
            <span style={{ marginTop: "30px" }}>
              ...
              <Spin style={{ marginLeft: "40px" }} />
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
          {!this.props.articles ? (
            <Spin
              style={{ marginTop: window.innerWidth < 800 ? "120px" : "300px" }}
            />
          ) : (
            <NewsSlider
              articles={this.props.articles}
              maximumNumberOfArticleInSlider={
                this.state.maximumNumberOfArticleInSlider
              }
            />
          )}
        </div>

        {!this.props.articles ? (
          <Spin
            style={{ marginTop: window.innerWidth < 800 ? "60px" : "250px" }}
          />
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
    userCountryName: state.internet.userCountryName,
    userCityName: state.internet.userCityName,
    articles: state.internet.myCountryNews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUserLocationInfoAndRequestMyCountryNews: () =>
      dispatch(actions.requestUserLocationInfoAndRequestMyCountryNews())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCountryNews);
