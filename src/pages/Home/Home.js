import "./Home.css";

import React, { Component } from "react";
import unirest from "unirest";
import { Icon } from "semantic-ui-react";

export default class Home extends Component {
  componentDidMount() {
    unirest
      .post("https://community-disco.p.mashape.com/query=love")
      .header(
        "X-Mashape-Key",
        "J3YJWUlCN1mshIPwlMb5ilplW4qYp1Lz9x1jsnM6OO3OiTushH"
      )
      .header("Content-Type", "application/x-www-form-urlencoded")
      .header("Accept", "application/json")
      .end(function(result) {
        console.log(result.status, result.headers, result.body, "hi");
      });
  }
  render() {
    return (
      <div>
        <div>Home</div>
        <h3>Welcome to your island</h3>
        <ul>
          <li>your city's weather</li>today's random quote<li />
          <li />
          <li />
          <li />
          <li />
        </ul>

        <Icon
          name="circle outline"
          style={{
            width: "100px"
          }}
        />
      </div>
    );
  }
}

/*
  Advice
  http://belikebill.azurewebsites.net/billgen-API.php?default=1
  http://belikebill.azurewebsites.net/billgen-API.php?default=1&name=yourname&sex=f
  http://belikebill.azurewebsites.net/billgen-API.php?text=This is Bill%0D%0ABe Like Bill
*/

/*
  Weather
  https://geoip-db.com/json/
  http://api.openweathermap.org/data/2.5/weather?APPID=6db884c885d37b28b2a29b1aa5fa3609&q=cairo
*/

/*
  What's the world serious about now?
  https://newsapi.org/v2/top-headlines?sources=abc-news,bbc-news,google-news,cbc-news,business-insider&apiKey=57b345a9885145969cc144ad50fbf66d
*/

/*
  What's the world fooling about now?
  https://newsapi.org/v2/everything?sources=buzzfeed&apiKey=57b345a9885145969cc144ad50fbf66d
*/

/*
  Great Quote
  http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback
*/
