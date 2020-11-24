import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Calculator {
  plus(x, y) {
      return x + y
  }

  minus(x, y) {
      return x - y
  }

  multiply(x, y) {
      return x * y
  }

  devide(x, y) {
      if (y == 0) return 0
      else return x / y
  }
}

const calculator = new Calculator
console.log(calculator.devide(2, 2))

exports.default = calculator

export default App;
