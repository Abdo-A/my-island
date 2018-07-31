import React, { Component } from "react";
import "./Events.css";

const RapidAPI = require("rapidapi-connect");
const rapid = new RapidAPI(
  "loloworld_5b0f0f20e4b089f3dc475407",
  "170de709-c804-4a9e-818f-ecd3fde83992"
);

export default class Events extends Component {
  state = {
    events: null,
    error: null
  };

  render() {
    return <div>Events</div>;
  }
}
