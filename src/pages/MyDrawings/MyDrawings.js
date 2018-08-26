import { connect } from "react-redux";
import { Icon, Button } from "semantic-ui-react";
import { Modal, notification, Spin } from "antd";
import { SketchPicker } from "react-color";
import CanvasDraw from "react-canvas-draw";
import React, { Component } from "react";

import * as actions from "../../store/actions";

import "./MyDrawings.css";

let interval;

class MyDrawings extends Component {
  state = {
    unauthenticatedUserDrawings: [],
    currentBrushColor: "#990000",
    currentBrushSize: 4,
    currentPageWidth: 1000,
    showColorPicker: false,
    showBrushSizePicker: false,
    showDeleteDrawingModal: false,
    drawingToBeDeleted: null,
    itemsAreFetchedOnFirstRender: false
  };

  componentDidMount() {
    if (this.props.authenticated)
      this.props.onFetchDrawings(
        this.props.tokenId,
        this.props.userId,
        "drawings"
      );

    interval = setInterval(() => {
      //Updating the canvas drawing in case that page is resized
      if (this.state.currentPageWidth !== window.innerWidth) {
        this.setState(() => ({
          currentPageWidth: window.innerWidth
        }));
        this.mainCanvas.loadSaveData(this.mainCanvas.getSaveData(), true);
      }
    }, 10);
  }

  componentDidUpdate() {
    //Updating the thumbnails for authenticated users
    if (this.props.authenticated && this.props.drawings) {
      for (let item of this.props.drawings) {
        if (this[item.idForThumbnail]) {
          this[item.idForThumbnail].loadSaveData(item.saveData, true);
        }
      }
    }
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  clearMainCanvas = () => {
    this.mainCanvas.clear();
  };

  onSaveDrawing = clearOrNot => {
    if (JSON.parse(this.mainCanvas.getSaveData()).linesArray.length === 0) {
      notification.open({
        message: "Can't Save Yet!",
        description: "Please make a drawing in order to save it."
      });
      return;
    }

    let drawingToBeSaved = this.mainCanvas.getSaveData();

    let randomId = Math.random();

    let currentDate = new Date();
    let readabledate =
      currentDate.toLocaleDateString("en-US") +
      " (" +
      JSON.stringify(currentDate.getHours()) +
      ":" +
      JSON.stringify(currentDate.getMinutes()) +
      ")";

    if (clearOrNot === "clear") {
      this.clearMainCanvas();
    }

    let itemToBeSaved = {
      saveData: drawingToBeSaved,
      date: readabledate,
      idForThumbnail: randomId
    };

    //for unauthenticated users
    if (!this.props.authenticated) {
      let savedItems = [...this.state.unauthenticatedUserDrawings];
      savedItems.unshift(itemToBeSaved);
      this.setState(
        () => ({
          unauthenticatedUserDrawings: savedItems
        }),
        () => {
          this[randomId].loadSaveData(drawingToBeSaved, true);
        }
      );
    }

    //for authenticated users
    if (this.props.authenticated)
      this.props.onSaveDrawing(
        itemToBeSaved,
        this.props.tokenId,
        this.props.userId,
        "drawings"
      );
  };

  handleViewSavedItem = index => {
    let savedDrawing = this.state.savedItems[index].saveData;
    this.mainCanvas.loadSaveData(savedDrawing, true);
  };

  onDeleteDrawing = order => {
    this.setState(() => ({
      showDeleteDrawingModal: false
    }));

    if (order === "ok") {
      //for unauthenticated users
      if (!this.props.authenticated) {
        let savedItems = [...this.state.unauthenticatedUserDrawings];
        let idOfDrawingToBeDeleted = savedItems.indexOf(
          this.state.drawingToBeDeleted
        );
        savedItems.splice(idOfDrawingToBeDeleted, 1);

        this.setState(
          () => ({
            unauthenticatedUserDrawings: savedItems
          }),
          () => {
            for (let item of savedItems) {
              this[item.idForThumbnail].loadSaveData(item.saveData, true);
            }
          }
        );
      }

      //for authenticated users
      if (this.props.authenticated) {
        this.props.onDeleteDrawing(
          this.state.drawingToBeDeleted,
          this.props.tokenId,
          this.props.userId,
          "drawings"
        );
      }
    } else {
      return;
    }
  };

  onBrushColorChange = color => {
    this.setState(() => ({
      currentBrushColor: color.hex
    }));
  };

  onBrushSizeChange = e => {
    this.setState({
      currentBrushSize: e.target.value
    });
  };

  toggleColorPicker = () => {
    this.setState(prevState => ({
      showColorPicker: !prevState.showColorPicker
    }));
  };

  toggleBrushSizePicker = () => {
    this.setState(prevState => ({
      showBrushSizePicker: !prevState.showBrushSizePicker
    }));
  };

  render() {
    //To update the items once when the page is refreshed
    if (this.props.authenticated && !this.state.itemsAreFetchedOnFirstRender) {
      this.props.onFetchDrawings(
        this.props.tokenId,
        this.props.userId,
        "drawings"
      );
      this.setState(() => ({
        itemsAreFetchedOnFirstRender: true
      }));
    }

    let deleteDrawingModal = (
      <Modal
        visible={this.state.showDeleteDrawingModal}
        onOk={() => {
          this.onDeleteDrawing("ok");
        }}
        onCancel={() => {
          this.onDeleteDrawing("cancel");
        }}
      >
        <h2>Are you sure you want to remove this drawing?</h2>
      </Modal>
    );

    let savedDrawings = "";
    if (this.props.loadingFetchingDrawings) {
      savedDrawings = <Spin style={{ marginTop: "20px" }} />;
    }

    let drawingsToBeFetched = this.state.unauthenticatedUserDrawings;
    if (this.props.authenticated) drawingsToBeFetched = this.props.drawings;

    if (drawingsToBeFetched) {
      savedDrawings = (
        <div
          ref={itemsContainer => {
            this.itemsContainer = itemsContainer;
          }}
        >
          {drawingsToBeFetched.map((item, index) => (
            <div key={item.idForThumbnail} className="MyDrawings__SavedDrawing">
              <Icon
                title="Remove Drawing"
                name="close"
                onClick={() =>
                  this.setState(() => ({
                    showDeleteDrawingModal: true,
                    drawingToBeDeleted: item
                  }))
                }
                style={{
                  cursor: "pointer",
                  margin: "0",
                  border: "1px solid black",
                  borderRadius: "50%",
                  height: "100%"
                }}
              />
              {deleteDrawingModal}
              <span
                onClick={() => this.handleViewSavedItem(index)}
                title="Show Saved Drawing"
                style={{ cursor: "pointer" }}
              >
                <CanvasDraw
                  style={{
                    width: "100px",
                    border: "1px solid #555",
                    display: "inline-block"
                  }}
                  brushColor="#ffffff00"
                  ref={it => {
                    this[item.idForThumbnail] = it;
                  }}
                />
              </span>
              <small
                style={{
                  display: "inline-block",
                  width: "70px"
                }}
              >
                <strong>{item.date}</strong>
              </small>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="MyDrawings">
        <Button color="green" onClick={this.onSaveDrawing}>
          Save My Drawing
        </Button>
        <Button color="red" onClick={this.clearMainCanvas}>
          Clear
        </Button>
        <Button color="purple" onClick={() => this.onSaveDrawing("clear")}>
          Save and clear
        </Button>

        {/* Button for picking brush size: */}

        <Button
          color="grey"
          onClick={this.toggleBrushSizePicker}
          style={{ position: "relative" }}
        >
          Change Brush Size
          {this.state.showBrushSizePicker ? (
            <div
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                backgroundColor: "rgb(39, 18, 18)",
                padding: "5px"
              }}
              onClick={""}
            >
              <input
                type="range"
                min="0"
                max="10"
                value={this.state.currentBrushSize}
                onChange={e => this.onBrushSizeChange(e)}
              />
              <input value={this.state.currentBrushSize} readOnly />
            </div>
          ) : null}
        </Button>

        {/* Button for picking color: */}
        <Button
          color="grey"
          onClick={this.toggleColorPicker}
          style={{ position: "relative" }}
        >
          Change Color
          {this.state.showColorPicker ? (
            <div
              style={{ position: "absolute", right: "20px", top: "20px" }}
              onClick={""}
            >
              <SketchPicker
                width="150px"
                color={this.state.currentBrushColor}
                onChangeComplete={this.onBrushColorChange}
              />
            </div>
          ) : null}
        </Button>

        <div className="MyDrawings__MainCanvasContainer">
          {/* The main canvas for drawing: */}
          <CanvasDraw
            style={{ margin: "20px auto" }}
            brushColor={this.state.currentBrushColor}
            brushSize={this.state.currentBrushSize}
            canvasWidth={0.7 * window.innerWidth}
            ref={can1 => {
              this.mainCanvas = can1;
            }}
          />

          {this.props.authenticated || (
            <p style={{ margin: "0", color: "#fff0dd", fontWeight: "bold" }}>
              (Sign up to be able to get back to your saved drawings)
            </p>
          )}

          {/* Displaying Saved Items through Map function:*/}

          {savedDrawings}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated,
    tokenId: state.authentication.tokenId,
    userId: state.authentication.userId,
    drawings: state.saveAndFetch.drawings,
    loadingSavingDrawings: state.saveAndFetch.loadingSavingDrawings,
    loadingFetchingDrawings: state.saveAndFetch.loadingFetchingDrawings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveDrawing: (itemData, tokenId, userId, itemType) =>
      dispatch(actions.saveItem(itemData, tokenId, userId, itemType)),
    onFetchDrawings: (tokenId, userId, itemType) =>
      dispatch(actions.fetchItems(tokenId, userId, itemType)),
    onDeleteDrawing: (itemData, tokenId, userId, itemType) =>
      dispatch(actions.deleteItem(itemData, tokenId, userId, itemType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDrawings);
