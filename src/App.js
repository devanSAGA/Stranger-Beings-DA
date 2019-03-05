import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <span role="img" aria-label="Construction Emoji">
              🚧
            </span>Under Construction!<span
              role="img"
              aria-label="Construction Emoji"
            >
              🚧
            </span>
          </p>
          <p>Please be back soon!</p>
        </header>
      </div>
    );
  }
}

export default App;
