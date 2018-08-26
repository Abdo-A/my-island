import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import { Spin, Card } from "antd";
import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

import NewsCard from "../../components/News/NewsCard/NewsCard";

import "./Home.css";
import * as actions from "../../store/actions/index";

class Home extends Component {
  componentDidMount() {
    if (this.props.numberOfMassiveAPIRequests === 0)
      this.props.requestEverythingFromInternet();
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

    let userFirstName = null;
    if (this.props.fullName) {
      userFirstName = this.props.fullName[0].fullName.split(" ")[0];
    }

    return (
      <div>
        {/* Serious and silly news */}
        <div className="Home__NewsPiecesWrapper">
          <span className="Home__NewsPiece">
            <h3 className="Home__Header Home__NewsPiece__Header__Serious">
              What's the world{" "}
              <span className="Home__Header__FocusWord2">serious</span> about{" "}
              <span className="Home__Header__FocusWord">NOW</span>?
            </h3>
            {seriousNews}
          </span>

          <span className="Home__NewsPiece">
            <h3 className="Home__Header Home__NewsPiece__Header__Silly">
              What's the world{" "}
              <span className="Home__Header__FocusWord2">silly</span> about{" "}
              <span className="Home__Header__FocusWord">NOW</span>?
            </h3>
            {sillyNews}
          </span>
        </div>

        {/* Weather */}
        {this.props.userCityName == null || (
          <div className="Home__Weather">
            <Card>
              <h3 className="Home__Header Home__Weather__Header">
                What's the{" "}
                <span className="Home__Header__FocusWord2">weather</span> in
                your city <span className="Home__Header__FocusWord">NOW</span>?
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
        )}

        {/* Today's Advice */}
        <div className="Home__Advice">
          <Card>
            <h3 className="Home__Header Home__Advice__Header">
              What's <span className="Home__Header__FocusWord">today's</span>{" "}
              best <span className="Home__Header__FocusWord2">advice</span>?
            </h3>
            <img
              className="Home__Advice__Comic"
              src={
                userFirstName
                  ? `http://belikebill.azurewebsites.net/billgen-API.php?default=1&name=${userFirstName}&sex=m`
                  : "http://belikebill.azurewebsites.net/billgen-API.php?default=1"
              }
              alt="comic"
            />
          </Card>
        </div>

        {/*Today's Picture*/}
        <div className="Home__Picture">
          <Card>
            <h3 className="Home__Header Home__Picture__Header">
              What's <span className="Home__Header__FocusWord">today's</span>{" "}
              best <span className="Home__Header__FocusWord2">picture</span>?
            </h3>
            <img
              className="Home__Picture__Picture"
              src="https://source.unsplash.com/daily"
              alt="art"
            />
          </Card>
        </div>

        {/* Today's Quote */}
        <div className="Home__Quote">
          <Card>
            <h3 className="Home__Header Home__Quote__Header">
              What's <span className="Home__Header__FocusWord">today's</span>{" "}
              most valuable{" "}
              <span className="Home__Header__FocusWord2">saying</span>?
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
    quote: state.internet.quote,
    fullName: state.saveAndFetch.fullName,
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
