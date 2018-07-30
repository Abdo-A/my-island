import { Icon } from "semantic-ui-react";
import CanvasDraw from "react-canvas-draw";
import React, { Component } from "react";

import "./MyDrawings.css";

class MyDrawings extends Component {
  state = {
    currentPageWidth: window.innerWidth,
    currentBrushColor: "#990000",
    mainCanvasWidth: 600,
    savedItems: [],
    newSaveData: null
  };
  componentDidMount() {
    setInterval(() => {
      //Determining Canvas Width according to page width
      if (this.state.currentPageWidth !== window.innerWidth) {
        let pageWidth = window.innerWidth;
        let mainCanvasWidth =
          pageWidth > 1200
            ? 800
            : pageWidth > 1000
              ? 600
              : pageWidth > 800
                ? 400
                : pageWidth > 500
                  ? 300
                  : 200;
        this.setState(() => ({
          currentPageWidth: pageWidth,
          mainCanvasWidth: mainCanvasWidth
        }));
      }

      //   if (this.mainCanvas && this.mainCanvas.getSaveData()) {
      //     //console.log(this.mainCanvas.getSaveData());
      //     let prevDraw = this.mainCanvas.getSaveData();

      //     this.secondCanvasElement.loadSaveData(prevDraw, false);
      //     // console.log(
      //     //   this.mainCanvas.loadSaveData({
      //     //     saveData: prevDraw,
      //     //     immediate: true
      //     //   })
      //     // );
      //   }
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {}
  changeColor = () => {
    this.setState(() => ({
      currentBrushColor: "#000099"
    }));
  };

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

  render() {
    return (
      <div className="MyDrawings">
        <button onClick={this.changeColor}>Change Color</button>
        <button onClick={this.clearMainCanvas}>Clear</button>
        <button onClick={this.saveDrawing}>Save</button>
        <button onClick={() => this.saveDrawing("clear")}>
          Save and clear
        </button>
        <div className="MyDrawings__MainCanvasContainer">
          <CanvasDraw
            style={{ margin: "20px auto" }}
            brushColor={this.state.currentBrushColor}
            canvasWidth={this.state.mainCanvasWidth}
            ref={can1 => {
              this.mainCanvas = can1;
            }}
          />
          <div
            ref={itemsContainer => {
              this.itemsContainer = itemsContainer;
            }}
          >
            {this.state.savedItems.map((item, index) => (
              <span key={item.id} style={{ margin: "10px" }}>
                <Icon
                  name="close"
                  onClick={() => this.deleteItem(index)}
                  style={{
                    cursor: "pointer",
                    margin: "0"
                  }}
                />
                <CanvasDraw
                  style={{
                    width: "100px",
                    border: "2px solid black",
                    display: "inline-block"
                  }}
                  brushColor="#ffffff00"
                  ref={it => {
                    this[item.id] = it;
                  }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MyDrawings;
