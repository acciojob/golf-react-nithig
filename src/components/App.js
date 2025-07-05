import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderBall: false,
      ballPosition: { left: "0px" },
    };

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Start button click handler
  buttonClickHandler() {
    this.setState({
      renderBall: true,
    });
  }

  // Move the ball on Right Arrow key press
  handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      const currentLeft = parseInt(this.state.ballPosition.left);
      const newLeft = currentLeft + 5;

      this.setState({
        ballPosition: {
          left: `${newLeft}px`,
        },
      });
    }
  }

  // Attach event listener after component mounts
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  // Optional cleanup
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  // Conditional rendering of button or ball
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;