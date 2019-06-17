import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
      // <div className="App">
      //   <h1>We are launching on this week! (finally!)</h1>
      // </div>
    );
  }
}

export default App;
