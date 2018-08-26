import { connect } from "react-redux";
import React, { Component } from "react";

import Aux from "../Auxe/Auxe";
import MainMenu from "../../components/Navigation/MainMenu/MainMenu";
import MusicPlayer from "../../components/Music/MusicPlayer/MusicPlayer";
import SignIn from "../../components/Authentication/SignIn/SignIn";
import SignUp from "../../components/Authentication/SignUp/SignUp";

import "./Layout.css";

class Layout extends Component {
  state = {
    greetUser: true
  };

  componentDidMount() {
    setTimeout(() => {
      if (this.props.authenticated) {
        setTimeout(() => {
          this.setState(() => ({
            greetUser: false
          }));
        }, 5000);
      }
    }, 2000);
  }

  render() {
    let userName = "";
    if (this.props.fullName) {
      userName = this.props.fullName[0].fullName;
    }

    return (
      <Aux>
        <MainMenu location={this.props.location} />
        <SignIn />
        <SignUp />
        <MusicPlayer autoplay={false} />
        <div className="Layout__MainHeader">My Island</div>
        <main className="container" style={{ marginTop: "125px" }}>
          {this.props.authenticated && this.state.greetUser ? (
            <p className="Layout__UserGreeting">Welcome {userName}!</p>
          ) : (
            ""
          )}
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated,
    fullName: state.saveAndFetch.fullName
  };
};

export default connect(mapStateToProps)(Layout);
