import React from "react";
import logo from "./logo.svg";
import Counter from "./features/counter/Counter";
import "./App.css";

import StoreProvider from "./app/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </span>
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
