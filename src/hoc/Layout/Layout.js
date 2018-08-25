import React, { Component } from "react";

import Aux from "../Auxe/Auxe";
import MainMenu from "../../components/Navigation/MainMenu/MainMenu";
import MusicPlayer from "../../components/Music/MusicPlayer/MusicPlayer";

import "./Layout.css";
import SignIn from "../../components/Authentication/SignIn/SignIn";
import SignUp from "../../components/Authentication/SignUp/SignUp";
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <MainMenu location={this.props.location} />
        <SignIn />
        <SignUp />
        <MusicPlayer autoplay={false} />

        <main className="container" style={{ marginTop: "10vh" }}>
          {this.props.authenticated
            ? "Welcome to your account"
            : "Please sign up"}
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated
  };
};

export default connect(mapStateToProps)(Layout);
