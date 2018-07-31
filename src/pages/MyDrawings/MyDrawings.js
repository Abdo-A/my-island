import { Icon, Button } from "semantic-ui-react";
import { SketchPicker } from "react-color";
import CanvasDraw from "react-canvas-draw";
import React, { Component } from "react";

import "./MyDrawings.css";

let interval;

class MyDrawings extends Component {
  state = {
    currentPageWidth: 1000,
    currentBrushColor: "#990000",
    currentBrushSize: 4,
    mainCanvasWidth: 600,
    savedItems: [],
    showColorPicker: false,
    showBrushSizePicker: false
  };
  componentDidMount() {
    interval = setInterval(() => {
      //Determining Canvas Width according to page width
      if (this.state.currentPageWidth !== window.innerWidth) {
        let pageWidth = window.innerWidth;
        let mainCanvasWidth =
          pageWidth > 1150
            ? 800
            : pageWidth > 1000
              ? 600
              : pageWidth > 800
                ? 400
                : pageWidth > 500
                  ? 320
                  : 200;
        this.setState(() => ({
          currentPageWidth: pageWidth,
          mainCanvasWidth: mainCanvasWidth
        }));
        this.mainCanvas.loadSaveData(this.mainCanvas.getSaveData(), true);
      }
    }, 10);
  }
  componentWillUnmount() {
    clearInterval(interval);
  }

  clearMainCanvas = () => {
    this.mainCanvas.clear();
  };

  saveDrawing = clearOrNot => {
    let drawingToBeSaved = this.mainCanvas.getSaveData();
    let randomId = Math.random();
    let itemToBeSaved = {
      id: randomId,
      saveData: drawingToBeSaved
    };

    let savedItems = [...this.state.savedItems];
    savedItems.push(itemToBeSaved);
    this.setState(
      () => ({
        savedItems: savedItems
      }),
      () => {
        this[randomId].loadSaveData(drawingToBeSaved, true);
        console.log(this.state.savedItems);
        if (clearOrNot === "clear") {
          this.clearMainCanvas();
        }
      }
    );
  };

  handleViewSavedItem = index => {
    let savedDrawing = this.state.savedItems[index].saveData;
    this.mainCanvas.loadSaveData(savedDrawing, true);
  };

  deleteItem = index => {
    let savedItems = [...this.state.savedItems];
    savedItems.splice(index, 1);

    this.setState(
      () => ({
        savedItems: savedItems
      }),
      () => {
        for (let item of savedItems) {
          this[item.id].loadSaveData(item.saveData, true);
        }
      }
    );
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
    return (
      <div className="MyDrawings">
        <Button color="red" onClick={this.clearMainCanvas}>
          Clear
        </Button>
        <Button color="teal" onClick={this.saveDrawing}>
          Save
        </Button>
        <Button color="purple" onClick={() => this.saveDrawing("clear")}>
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
            canvasWidth={this.state.mainCanvasWidth}
            ref={can1 => {
              this.mainCanvas = can1;
            }}
          />

          {/* Displaying Saved Items through Map:*/}
          <div
            ref={itemsContainer => {
              this.itemsContainer = itemsContainer;
            }}
          >
            {this.state.savedItems.map((item, index) => (
              <span key={item.id} style={{ margin: "10px" }}>
                <Icon
                  title="Remove Drawing"
                  name="close"
                  onClick={() => this.deleteItem(index)}
                  style={{
                    cursor: "pointer",
                    margin: "0",
                    border: "1px solid black",
                    borderRadius: "50%",
                    height: "100%"
                  }}
                />
                <span
                  onClick={() => this.handleViewSavedItem(index)}
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
                      this[item.id] = it;
                    }}
                  />
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MyDrawings;
