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
  componentWillMount() {
    rapid
      .call("Eventful", "searchEvents", {
        date: "This Week",
        consumerKey: "a1f0b90f6fff68ce5b31",
        sortOrder: "popularity",
        location: "Shanghai",
        consumerSecret: "05ee130f29acec622618",
        appKey: "S6zNXwKjqkbPx2Jp"
      })
      .on("success", payload => {
        this.setState(() => ({
          events: payload.search.events[0].event
        }));
      })
      .on("error", payload => {
        console.log(payload);
      });
  }
  render() {
    let events = null;
    if (this.state.events) {
      events = this.state.events.map(event => {
        console.log(event);
        return (
          <div key={event.url}>
            <a href={event.url} target="_blank">
              <h2>{event.title}</h2>
            </a>
            <p>{event.description}</p>
            <br />
          </div>
        );
      });
    }
    return events;
  }
}
