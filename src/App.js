import React, { Component } from "react";
import SubHeader from "./components/subHeader/subHeader";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SubHeader semester={1} />
        <SubHeader semester={2} />
        <SubHeader semester={3} />
        <SubHeader semester={4} />
        <SubHeader semester={5} />
        <SubHeader semester={6} />
        <SubHeader semester={7} />
        <SubHeader semester={8} />
      </div>
    );
  }
}

export default App;
