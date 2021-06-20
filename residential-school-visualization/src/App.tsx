import React from "react";
import logo from "./logo.svg";
import { Map } from "./Map";
import "./App.css";

// leaflet css
import "leaflet/dist/leaflet.css";
// needed to make image markers work on leaflet maps with webpack bundler
// source: https://github.com/ghybs/leaflet-defaulticon-compatibility
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div style={{ height: "500px" }}>
        <Map />
      </div>
    </div>
  );
}

export default App;
