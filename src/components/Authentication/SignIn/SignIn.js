import { Modal } from "semantic-ui-react";
import React, { Component } from "react";

import * as actions from "../../../store/actions";
import { connect } from "react-redux";
import SignInForm from "./SignInForm/SignInForm";

class SignIn extends Component {
  openSignUpInstead = () => {
    this.props.closeSignIn();
    this.props.openSignUp();
  };

  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.closeSignIn}
        size="tiny"
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
      >
        <Modal.Header>Sign In</Modal.Header>
        <Modal.Content>
          <SignInForm />
          <br />
          <p>
            Don't have an account?{" "}
            <span
              onClick={this.openSignUpInstead}
              style={{
                color: "#16AB39",
                cursor: "pointer",
                fontWeight: "bold"
              }}
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
