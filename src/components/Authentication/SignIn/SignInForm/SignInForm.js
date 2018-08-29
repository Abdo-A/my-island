import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import React, { Component } from "react";

import * as actions from "../../../../store/actions";

class SignInForm extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  componentWillReceiveProps(nextProps) {
    //Handle authentication error (firebase authentication errors)

    this.setState(() => ({
      error: null
    }));

    if (nextProps.authenticationError) {
      let authenticationError = nextProps.authenticationError.split("_");

      //Capitalize each word:
      for (let i = 0; i < authenticationError.length; i++) {
        authenticationError[i] =
          authenticationError[i].charAt(0).toUpperCase() +
          authenticationError[i].toLowerCase().slice(1);
      }

      authenticationError = authenticationError.join(" ");

      this.setState(() => ({
        error: authenticationError
      }));
    }
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: null
    });
  };

  onSubmit = () => {
    //Handling errors prior to authentication
    this.setState(() => ({
      error: null
    }));
    let possibleErrors = [
      this.state.email.length < 6,
      this.state.password.length < 6
    ];
    let possibleResponses = ["Email is too short", "Password is too short"];
    for (let i = 0; i < possibleErrors.length; i++) {
      if (possibleErrors[i]) {
        this.setState(() => ({
          error: possibleResponses[i]
        }));
        return;
      }
    }

    const data = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.submitSignIn(data);
  };

  render() {
    console.log(this.props);
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={this.state.email}
            onChange={e => this.onInputChange(e)}
          />
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.onInputChange(e)}
          />
        </Form.Field>

        <div style={{ color: "red", fontWeight: "bold" }}>
          {this.state.error}
        </div>
        <br />

        <Button type="submit" loading={this.props.authenticationLoading}>
          Submit
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticationLoading: state.authentication.authenticationLoading,
    authenticationError: state.authentication.authenticationError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitSignIn: data => dispatch(actions.authenticationSignIn(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
