import logo from './logo.svg';
import React from 'react';
import './App.css';
const React_Version=React.version;

function App() {
  return (
    <div className="App">
      <h1>I am just check version of react js</h1>
      <h3>The version of React js is :{React_Version}</h3>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
