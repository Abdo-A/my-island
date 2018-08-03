import "./Home.css";

import React, { Component } from "react";
import unirest from "unirest";

export default class Home extends Component {
  componentDidMount() {
    unirest
      .post(
        "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10"
      )
      .header(
        "X-Mashape-Key",
        "J3YJWUlCN1mshIPwlMb5ilplW4qYp1Lz9x1jsnM6OO3OiTushH"
      )
      .header("Content-Type", "application/x-www-form-urlencoded")
      .header("Accept", "application/json")
      .end(function(result) {
        console.log(result.status, result.headers, result.body);
      });
  }
  render() {
    return (
      <div>
        <div>Home</div>
        <h3>Welcome to your island</h3>
      </div>
    );
  }
}
