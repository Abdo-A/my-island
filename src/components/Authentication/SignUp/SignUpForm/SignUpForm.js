import { Button, Form } from "semantic-ui-react";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions";

class SignUpForm extends Component {
  state = {
    fullName: "",
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
      this.state.fullName.length < 3,
      this.state.email.length < 6,
      this.state.password.length < 6
    ];
    let possibleResponses = [
      "Full Name is too short",
      "Email is too short",
      "Password is too short"
    ];
    for (let i = 0; i < possibleErrors.length; i++) {
      if (possibleErrors[i]) {
        this.setState(() => ({
          error: possibleResponses[i]
        }));
        return;
      }
    }

    const data = {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password
    };
    this.props.submitSignUp(data);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={this.state.fullName}
            onChange={e => this.onInputChange(e)}
          />
        </Form.Field>

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
    submitSignUp: data => dispatch(actions.authenticationSignUp(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
