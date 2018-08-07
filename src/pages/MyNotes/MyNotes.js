import { Collapse, notification, Modal } from "antd";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import React, { Component } from "react";

import "./MyNotes.css";

const Panel = Collapse.Panel;

class MyNotes extends Component {
  state = {
    mainNoteTitle: "",
    mainNoteBody: "",
    savedNotes: [],
    showDeleteNoteModal: false,
    noteToBeDeleted: null
  };

  onChangeNoteTitle = (e, { value }) => {
    this.setState(() => ({ mainNoteTitle: value }));
  };

  onChangeNoteBody = (e, { value }) => {
    this.setState(() => ({ mainNoteBody: value }));
  };

  onSaveNote = () => {
    if (
      this.state.mainNoteTitle.trim() === "" ||
      this.state.mainNoteBody.trim() === ""
    ) {
      notification.open({
        message: "Can't Save Yet!",
        description:
          "Please fill in the title and the body of the note in order to save it."
      });
      return;
    }

    let currentDate = new Date();
    let currentDay = currentDate.toDateString();
    let currentTime =
      JSON.stringify(currentDate.getHours()) +
      ":" +
      JSON.stringify(currentDate.getMinutes());

    let noteToBeSaved = {
      title: this.state.mainNoteTitle,
      body: this.state.mainNoteBody,
      id: Math.random(),
      date: currentDay,
      time: currentTime
    };
    let savedNotes = [...this.state.savedNotes];
    savedNotes.unshift(noteToBeSaved);
    this.setState(() => ({
      savedNotes: savedNotes
    }));
  };

  onDeleteNote = order => {
    this.setState(() => ({
      showDeleteNoteModal: false
    }));
    if (order === "ok") {
      let savedNotes = [...this.state.savedNotes];
      savedNotes.splice(this.state.noteToBeDeleted, 1);

      this.setState(() => ({
        savedNotes: savedNotes
      }));
    } else {
      return;
    }
  };

  render() {
    let deleteNoteModal = (
      <Modal
        visible={this.state.showDeleteNoteModal}
        onOk={() => {
          this.onDeleteNote("ok");
        }}
        onCancel={() => {
          this.onDeleteNote("cancel");
        }}
      >
        <h2>Are you sure you want to delete this note?</h2>
      </Modal>
    );

    return (
      <div className="MyNotes">
        {/**/}
        {/* Form for the current note: */}
        {/**/}
        <Form>
          <Form.Field>
            <label>Title</label>
            <Input
              placeholder="Title..."
              style={{ width: "70%" }}
              onChange={this.onChangeNoteTitle}
            />
          </Form.Field>

          <Form.Field>
            <label>Body</label>
            <TextArea
              placeholder="So, what would you like to talk about?"
              style={{
                width: "70%",
                height: "30vh",
                display: "block",
                margin: "0 auto"
              }}
              onChange={this.onChangeNoteBody}
            />
          </Form.Field>
          <Button type="submit" color="green" onClick={this.onSaveNote}>
            Save Note
          </Button>
        </Form>
        {/**/}
        {/* Viewing saved notes: */}
        {/**/}
        <Collapse
          bordered={false}
          style={{ width: "80%", margin: "30px auto" }}
        >
          {this.state.savedNotes.map((note, index) => {
            return (
              <Panel header={note.title} key={index}>
                <p>
                  <small style={{ float: "left", textAlign: "left" }}>
                    {note.date}
                    <br />
                    <strong>{note.time}</strong>
                  </small>

                  <Button
                    floated="right"
                    size="mini"
                    color="red"
                    onClick={() =>
                      this.setState(() => ({
                        showDeleteNoteModal: true,
                        noteToBeDeleted: index
                      }))
                    }
                  >
                    Delete Note
                  </Button>
                  {deleteNoteModal}

                  <br />
                  <strong>{note.body}</strong>
                </p>
              </Panel>
            );
          })}
        </Collapse>,
      </div>
    );
  }
}

export default MyNotes;
