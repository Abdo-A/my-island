import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import React, { Component } from "react";

import * as actions from "../../../store/actions";
import SignUpForm from "./SignUpForm/SignUpForm";

class SignUp extends Component {
  openSignInInstead = () => {
    this.props.closeSignUp();
    this.props.openSignIn();
  };

  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.closeSignUp}
        size="tiny"
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
      >
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Content>
          <SignUpForm />
          <br />
          <p>
            Have an account?{" "}
            <span
              onClick={this.openSignInInstead}
              style={{
                color: "#009C95",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Sign In
            </span>
          </p>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.basic.openSignUp
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
)(SignUp);
