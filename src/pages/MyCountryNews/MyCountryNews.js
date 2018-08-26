import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { Spin } from "antd";
import React, { Component } from "react";

import * as actions from "../../store/actions/index";
import NewsCardsCollection from "../../components/News/NewsCardsCollection/NewsCardsCollection";

//import NewsSlider from "../../components/News/NewsSlider/NewsSlider";

import "./MyCountryNews.css";

class MyCountryNews extends Component {
  state = {
    maximumNumberOfArticleCards: 15,
    maximumNumberOfArticleInSlider: 3,
    articles: null,
    chosenNewsGenre: "general",
    firstLoad: true
  };

  componentDidMount() {
    if (this.props.numberOfMassiveAPIRequests === 0)
      this.props.requestEverythingFromInternet();
  }

  handleChooseGenre = (e, { name }) => {
    if (name === "general") {
      //this.props.requestUserLocationInfoAndRequestMyCountryNews("general");

      this.setState(() => ({
        articles: this.props.generalArticles
      }));
    } else if (name === "sports") {
      this.props.requestUserLocationInfoAndRequestMyCountryNews("sports");

      this.setState(() => ({
        articles: this.props.sportsArticles
      }));
    } else if (name === "technology") {
      this.props.requestUserLocationInfoAndRequestMyCountryNews("technology");

      this.setState(() => ({
        articles: this.props.technologyArticles
      }));
    } else if (name === "business") {
      this.props.requestUserLocationInfoAndRequestMyCountryNews("business");

      this.setState(() => ({
        articles: this.props.businessArticles
      }));
    }
    this.setState({ chosenNewsGenre: name, firstLoad: false });
  };

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

    let articles = this.state.firstLoad
      ? this.props.generalArticles
      : this.state.articles;

    return (
      <div>
        <div className="MyCountryNews__LocationIndication">
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
            name="business"
            active={this.state.chosenNewsGenre === "business"}
            onClick={this.handleChooseGenre}
          >
            Business
          </Menu.Item>
        </Menu>

        {/*
        <div>
          {!articles ? (
            <Spin
              style={{ marginTop: window.innerWidth < 800 ? "120px" : "300px" }}
            />
          ) : (
            <NewsSlider
              articles={articles}
              maximumNumberOfArticleInSlider={
                this.state.maximumNumberOfArticleInSlider
              }
            />
          )}
        </div>
        */}

        {!articles ? (
          <Spin
            style={{ marginTop: window.innerWidth < 800 ? "60px" : "80px" }}
          />
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
    userCountryName: state.internet.userCountryName,
    userCityName: state.internet.userCityName,

    generalArticles: state.internet.myCountryNews,
    sportsArticles: state.internet.myCountryNewsSports,
    technologyArticles: state.internet.myCountryNewsTechnology,
    businessArticles: state.internet.myCountryNewsBusiness,

    numberOfMassiveAPIRequests: state.internet.numberOfMassiveAPIRequests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEverythingFromInternet: () =>
      dispatch(actions.requestEverythingFromInternet()),
    requestUserLocationInfoAndRequestMyCountryNews: newsType =>
      dispatch(actions.requestUserLocationInfoAndRequestMyCountryNews(newsType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCountryNews);
