import axios from "axios";
import React, { Component } from "react";

import { newsApiKey } from "../../data/apiKeys";
import NewsCard from "../../components/News/NewsCard/NewsCard";
import ReactHtmlParser from "react-html-parser";

import "./Home.css";
import { Spin, Card } from "antd";
import { Icon } from "semantic-ui-react";

export default class Home extends Component {
  state = {
    userCountryName: null,
    userCountryCode: null,
    userCityName: null,
    userCityWeather: null,
    seriousNews: null,
    sillyNews: null,
    quote: null
  };

  componentDidMount() {
    //API call to get userCityName

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
            //API call to get userCityWeather

            axios
              .get(
                `http://api.openweathermap.org/data/2.5/weather?APPID=6db884c885d37b28b2a29b1aa5fa3609&q=${
                  this.state.userCityName
                }&units=metric`
              )
              .then(res => {
                this.setState(() => ({
                  userCityWeather: {
                    temp: res.data.main.temp,
                    description: res.data.weather[0].description
                  }
                }));
              });
          }
        );
      })
      .catch(err => {
        console.log(err);
      });

    //NewsAPI call for serious news
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=abc-news,bbc-news,google-news,business-insider&language=en&apiKey=${newsApiKey}`
      )
      .then(res => {
        this.setState(() => ({
          seriousNews: res.data.articles[0]
        }));
      })
      .catch(error => console.log(error));

    //NewsAPI call for silly news
    axios
      .get(
        `https://newsapi.org/v2/everything?sources=buzzfeed&language=en&apiKey=${newsApiKey}`
      )
      .then(res => {
        this.setState(() => ({
          sillyNews: res.data.articles[0]
        }));
      })
      .catch(error => console.log(error));

    //API call for the quote
    axios
      .get(
        `https://cors.io/?http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback`
      )
      .then(res => {
        console.log(JSON.parse(res.data.substring(16, res.data.length - 2)));
        this.setState(
          () => ({
            quote: JSON.parse(res.data.substring(16, res.data.length - 2))
          }),
          () => {
            //console.log("quote", this.state.quote);
          }
        );
      })
      .catch(error => console.log(error));
  }

  render() {
    let seriousNews = <Spin style={{ marginTop: "100px" }} />;
    let sillyNews = <Spin style={{ marginTop: "100px" }} />;

    if (this.state.seriousNews) {
      seriousNews = (
        <NewsCard
          title={this.state.seriousNews.title}
          image={this.state.seriousNews.urlToImage}
          url={this.state.seriousNews.url}
          description={this.state.seriousNews.description}
          noMargin
        />
      );
    }

    if (this.state.sillyNews) {
      sillyNews = (
        <NewsCard
          title={this.state.sillyNews.title}
          image={this.state.sillyNews.urlToImage}
          url={this.state.sillyNews.url}
          description={this.state.sillyNews.description}
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
            <div>
              {this.state.userCityName ? (
                this.state.userCityName
              ) : (
                <Spin style={{ marginTop: "20px", marginBottom: "20px" }} />
              )}
            </div>
            <div>
              {this.state.userCityWeather ? (
                <span>Temperature: {this.state.userCityWeather.temp}</span>
              ) : (
                <Spin style={{ marginTop: "20px", marginBottom: "20px" }} />
              )}
            </div>
            <div>
              {this.state.userCityWeather
                ? this.state.userCityWeather.description
                : null}
            </div>
          </Card>
        </div>

        {/* Today's Quote */}
        <div className="Home__Quote">
          <Card>
            <h3 className="Home__Header Home__Quote__Header">
              What's today's most valuable saying?
            </h3>
            {this.state.quote ? (
              <span>
                <p className="Home__Quote__Quote">
                  <span className="Home__Quote__Icon">
                    <Icon name="quote left" size="huge" />
                  </span>
                  <span className="Home__Quote__Text">
                    {ReactHtmlParser(this.state.quote.content)}
                  </span>
                  <span className="Home__Quote__Icon">
                    <Icon name="quote right" size="huge" />
                  </span>
                  <p className="Home__Quote__Author">
                    {this.state.quote.title}
                  </p>
                </p>
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
            />
          </Card>
        </div>
      </div>
    );
  }
}

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
