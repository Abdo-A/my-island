import { Icon, Button } from "semantic-ui-react";
import { SketchPicker } from "react-color";
import CanvasDraw from "react-canvas-draw";
import React, { Component } from "react";

import "./MyDrawings.css";

let interval;

class MyDrawings extends Component {
  state = {
    currentBrushColor: "#990000",
    currentBrushSize: 4,
    savedItems: [],
    currentPageWidth: 1000,
    showColorPicker: false,
    showBrushSizePicker: false
  };
  componentDidMount() {
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
  componentWillUnmount() {
    clearInterval(interval);
  }

  clearMainCanvas = () => {
    this.mainCanvas.clear();
  };

  onSaveDrawing = clearOrNot => {
    let drawingToBeSaved = this.mainCanvas.getSaveData();
    let randomId = Math.random();
    let itemToBeSaved = {
      id: randomId,
      saveData: drawingToBeSaved
    };

    let savedItems = [...this.state.savedItems];
    savedItems.unshift(itemToBeSaved);
    this.setState(
      () => ({
        savedItems: savedItems
      }),
      () => {
        this[randomId].loadSaveData(drawingToBeSaved, true);
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

  onDeleteDrawing = index => {
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
                  onClick={() => this.onDeleteDrawing(index)}
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
