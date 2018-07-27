import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import Home from "./pages/Home/Home";
import Intro from "./pages/Intro/Intro";
import Layout from "./hoc/Layout/Layout";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Intro} />
            <Layout>
              <Switch>
                <Route path="/home" exact component={Home} />
                <Route
                  path="/another-page"
                  exact
                  render={() => "Another page"}
                />
              </Switch>
            </Layout>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
