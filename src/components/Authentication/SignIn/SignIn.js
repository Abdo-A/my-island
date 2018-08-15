import { Backdrop } from "@material-ui/core";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import React, { Component } from "react";

import * as actions from "../../../store/actions";
import { connect } from "react-redux";

class SignIn extends Component {
  openSignUpInstead = () => {
    this.props.closeSignIn();
    this.props.openSignUp();
  };

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.closeSignIn}>
        <Modal.Header>Sign In</Modal.Header>
        <Modal.Content>
          <p>
            Don't have an account?{" "}
            <span
              onClick={this.openSignUpInstead}
              style={{ color: "#009C95", cursor: "pointer" }}
            >
              Sign Up
            </span>
          </p>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.basic.openSignIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSignUp: () => dispatch(actions.openSignUp()),
    closeSignUp: () => dispatch(actions.closeSignUp()),
    openSignIn: () => dispatch(actions.openSignIn()),
    closeSignIn: () => dispatch(actions.closeSignIn())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
