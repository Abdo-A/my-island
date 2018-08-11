import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Component } from "react";

import * as actions from "../../store/actions/index";

import "./Intro.css";
import { withSizes } from "react-sizes";

class Intro extends Component {
  componentDidMount() {
    if (this.props.numberOfMassiveAPIRequests === 0)
      this.props.requestEverythingFromInternet();
  }
  render() {
    return (
      <div className="Intro" style={{ height: this.props.screenHeight + "px" }}>
        <div className="Intro__Start">
          <h1 className="Intro__Start__Header">My Island</h1>
          <p className="Intro__Start__Text">
            The only place online where you will be able to express yourself
            while getting the world's latest updates.
          </p>
          <Link to="/home">
            <Button color="green">Let me in</Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapSizesToProps = ({ width, height }) => ({
  screenHeight: height
});

const mapStateToProps = state => {
  return {
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
)(withSizes(mapSizesToProps)(Intro));
