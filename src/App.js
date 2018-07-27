import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import { pages } from "./data/pagesData";
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
                {pages.map(page => (
                  <Route path={page.path} component={page.component} />
                ))}
              </Switch>
            </Layout>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
