import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Intro extends Component {
  componentDidMount() {
    if (this.props.numberOfMassiveAPIRequests === 0)
      this.props.requestEverythingFromInternet();
  }
  render() {
    return (
      <div>
        <div>Intro</div>
        <h1>Welcome to your island..</h1>
        <h2>
          The only place online where you will be able to express yourself while
          getting the world's latest updates.
        </h2>
        <Link to="/home">Let me in</Link>
      </div>
    );
  }
}

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
)(Intro);
