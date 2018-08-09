import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import { Spin, Card } from "antd";
import axios from "axios";
import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

import { newsApiKey } from "../../data/apiKeys";
import * as actionTypes from "../../store/actions/actionTypes";
import NewsCard from "../../components/News/NewsCard/NewsCard";

import "./Home.css";
import * as actions from "../../store/actions/index";

class Home extends Component {
  state = {
    userCityWeather: null,
    seriousNews: null,
    sillyNews: null,
    quote: null
  };

  componentDidMount() {
    this.props.requestUserLocationInfoAndRequestUserWeatherInfo();
    this.props.requestSeriousNews();
    this.props.requestSillyNews();
    this.props.requestQuote();

    // //If the user location information is not in the redux store:

    // if (!this.props.userCountryName)
    //   //API call to get user location input and save them to the redux store
    //   axios
    //     .get("https://geoip-db.com/json/")
    //     .then(res => {
    //       this.props.setUserLocationInfo({
    //         userCountryName: res.data.country_name,
    //         userCountryCode: res.data.country_code,
    //         userCityName: res.data.city
    //       });

    //       //API call to get userCityWeather

    //       axios
    //         .get(
    //           `//api.openweathermap.org/data/2.5/weather?APPID=6db884c885d37b28b2a29b1aa5fa3609&q=${
    //             this.props.userCityName
    //           }&units=metric`
    //         )
    //         .then(res => {
    //           this.setState(() => ({
    //             userCityWeather: {
    //               temp: res.data.main.temp,
    //               description: res.data.weather[0].description
    //             }
    //           }));
    //         });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });

    // //If the user location information is in the redux store:

    // if (this.props.userCountryName) {
    //   axios
    //     .get(
    //       `//api.openweathermap.org/data/2.5/weather?APPID=6db884c885d37b28b2a29b1aa5fa3609&q=${
    //         this.props.userCityName
    //       }&units=metric`
    //     )
    //     .then(res => {
    //       this.setState(() => ({
    //         userCityWeather: {
    //           temp: res.data.main.temp,
    //           description: res.data.weather[0].description
    //         }
    //       }));
    //     });
    // }

    // //NewsAPI call for serious news
    // axios
    //   .get(
    //     `https://newsapi.org/v2/top-headlines?sources=abc-news,bbc-news,google-news,business-insider&language=en&apiKey=${newsApiKey}`
    //   )
    //   .then(res => {
    //     this.setState(() => ({
    //       seriousNews: res.data.articles[0]
    //     }));
    //   })
    //   .catch(error => console.log(error));

    // //NewsAPI call for silly news
    // axios
    //   .get(
    //     `https://newsapi.org/v2/everything?sources=buzzfeed&language=en&apiKey=${newsApiKey}`
    //   )
    //   .then(res => {
    //     this.setState(() => ({
    //       sillyNews: res.data.articles[0]
    //     }));
    //   })
    //   .catch(error => console.log(error));

    //API call for the quote
    // axios
    //   .get(
    //     `https://cors.io/?http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback`
    //   )
    //   .then(res => {
    //     //console.log(JSON.parse(res.data.substring(16, res.data.length - 2)));
    //     this.setState(() => ({
    //       quote: JSON.parse(res.data.substring(16, res.data.length - 2))
    //     }));
    //   })
    //   .catch(error => console.log(error));
  }

  render() {
    let seriousNews = <Spin style={{ marginTop: "100px" }} />;
    let sillyNews = <Spin style={{ marginTop: "100px" }} />;

    if (this.props.seriousNews) {
      seriousNews = (
        <NewsCard
          title={this.props.seriousNews.title}
          image={this.props.seriousNews.urlToImage}
          url={this.props.seriousNews.url}
          description={this.props.seriousNews.description}
          noMargin
        />
      );
    }

    if (this.props.sillyNews) {
      sillyNews = (
        <NewsCard
          title={this.props.sillyNews.title}
          image={this.props.sillyNews.urlToImage}
          url={this.props.sillyNews.url}
          description={this.props.sillyNews.description}
          noMargin
        />
      );
    }

    return (
      <div>
        {/* Serious and silly news */}
        <div className="Home__NewsPiecesWrapper">
          <span className="Home__NewsPiece">
            <Card>
              <h3 className="Home__Header Home__NewsPiece__Header__Serious">
                What's the world SERIOUS about NOW?
              </h3>
              {seriousNews}
            </Card>
          </span>

          <span className="Home__NewsPiece">
            <Card>
              <h3 className="Home__Header Home__NewsPiece__Header__Silly">
                What's the world SILLY about NOW?
              </h3>
              {sillyNews}
            </Card>
          </span>
        </div>

        {/* Weather */}
        <div className="Home__Weather">
          <Card>
            <h3 className="Home__Header Home__Weather__Header">
              What's the WEATHER in your city NOW?
            </h3>
            <div className="Home__Weather__Parts__Wrapper">
              <div className="Home__Weather__Part">
                {this.props.test}
                {this.props.userCityName ? (
                  this.props.userCityName
                ) : (
                  <Spin style={{ margin: "20px" }} />
                )}
              </div>
              <div className="Home__Weather__Part">
                {this.props.userCityWeather ? (
                  <span>{this.props.userCityWeather.temp}</span>
                ) : (
                  <Spin style={{ margin: "20px" }} />
                )}
              </div>
              <div className="Home__Weather__Part">
                {this.props.userCityWeather
                  ? this.props.userCityWeather.description
                  : null}
              </div>
            </div>
          </Card>
        </div>

        {/* Today's Quote */}
        <div className="Home__Quote">
          <Card>
            <h3 className="Home__Header Home__Quote__Header">
              What's today's most valuable saying?
            </h3>
            {this.props.quote ? (
              <span>
                <div className="Home__Quote__Quote">
                  <span className="Home__Quote__Icon">
                    <Icon name="quote left" size="huge" />
                  </span>
                  <span className="Home__Quote__Text">
                    {ReactHtmlParser(this.props.quote.content)}
                  </span>
                  <span className="Home__Quote__Icon">
                    <Icon name="quote right" size="huge" />
                  </span>
                  <div className="Home__Quote__Author">
                    {this.props.quote.title}
                  </div>
                </div>
              </span>
            ) : (
              <Spin style={{ marginTop: "50px", marginBottom: "50px" }} />
            )}
          </Card>
        </div>

        {/* Today's Advice */}
        <div className="Home__Advice">
          <Card>
            <h3 className="Home__Header Home__Advice__Header">
              What's today's best advice?
            </h3>
            <img
              className="Home__Advice__Comic"
              src="http://belikebill.azurewebsites.net/billgen-API.php?default=1"
              alt="comic"
            />
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userCountryName: state.internet.userCountryName,
    userCountryCode: state.internet.userCountryCode,
    userCityName: state.internet.userCityName,
    userCityWeather: state.internet.userCityWeather,
    seriousNews: state.internet.seriousNews,
    sillyNews: state.internet.sillyNews,
    quote: state.internet.quote
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUserLocationInfoAndRequestUserWeatherInfo: () =>
      dispatch(actions.requestUserLocationInfoAndRequestUserWeatherInfo()),
    requestSeriousNews: () => dispatch(actions.requestSeriousNews()),
    requestSillyNews: () => dispatch(actions.requestSillyNews()),
    requestQuote: () => dispatch(actions.requestQuote())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

/*
  What's the world serious about now?
  https://newsapi.org/v2/top-headlines?sources=abc-news,bbc-news,google-news,cbc-news,business-insider&apiKey=57b345a9885145969cc144ad50fbf66d
*/

/*
  What's the world fooling about now?
  https://newsapi.org/v2/everything?sources=buzzfeed&apiKey=57b345a9885145969cc144ad50fbf66d
*/

/*
  Weather
  https://geoip-db.com/json/
  http://api.openweathermap.org/data/2.5/weather?APPID=6db884c885d37b28b2a29b1aa5fa3609&q=cairo
*/

/*
  Great Quote
  http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback
*/

/*
  Advice
  http://belikebill.azurewebsites.net/billgen-API.php?default=1
  http://belikebill.azurewebsites.net/billgen-API.php?default=1&name=yourname&sex=f
  http://belikebill.azurewebsites.net/billgen-API.php?text=This is Bill%0D%0ABe Like Bill
*/
