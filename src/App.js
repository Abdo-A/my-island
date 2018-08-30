import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { Spin } from "antd";
import React, { Component } from "react";

import { pages } from "./data/pagesData";
import * as actions from "./store/actions";
import Intro from "./pages/Intro/Intro";
import Layout from "./hoc/Layout/Layout";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.checkUserAuthenticationState();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Intro ? Intro : Spin} />
          <Layout>
            <Switch>
              {pages.map(page => (
                <Route
                  path={page.path}
                  component={page.component}
                  key={page.path}
                />
              ))}
            </Switch>
          </Layout>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkUserAuthenticationState: () =>
      dispatch(actions.authenticationCheckState())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
