import { Button, Form } from "semantic-ui-react";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions";

class SignUpForm extends Component {
  state = {
    fullName: "",
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
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password
    };
    this.props.submitSignUp(data);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {this.props.authenticationError}

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
