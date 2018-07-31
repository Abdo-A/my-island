import { Form, Input, TextArea } from "semantic-ui-react";
import React, { Component } from "react";

import "./MyNotes.css";

class MyNotes extends Component {
  render() {
    return (
      <div className="MyNotes">
        <Form>
          <Input placeholder="Title..." />
          <TextArea
            placeholder="So, what would you like to talk about?"
            style={{
              width: "70%",
              height: "30vh",
              display: "block",
              margin: "30px auto"
            }}
          />
        </Form>
      </div>
    );
  }
}

export default MyNotes;
