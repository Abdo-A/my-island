import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import React, { Component } from "react";

import * as actions from "../../../../store/actions";

class SignInForm extends Component {
  state = {
    email: "",
    password: ""
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.submitSignIn(data);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {this.props.authenticationError}

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
