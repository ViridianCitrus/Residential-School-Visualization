import React from "react";
import { Home } from "./components/Home";
import logo from "./logo.svg";
import { Map } from "./Map";
import "./App.css";

// leaflet css
import "leaflet/dist/leaflet.css";
// needed to make image markers work on leaflet maps with webpack bundler
// source: https://github.com/ghybs/leaflet-defaulticon-compatibility
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";

const App: React.FC = () => {
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
          Learn React asdasd
        </a>
      </header> */}
      {/* <div style={{ height: "750px" }}>
        <Map />
      </div> */}
    </div>
  );
};
export default App;

/*import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import SchoolData from './components/SchoolData';
import Layout from './components/Layout';
import Error from './components/Error';
 
function App() {
  return (      
      <BrowserRouter>
      <div>
        <Layout />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/school-data" component={SchoolData}/>
          <Route component={Error}/>
          </Switch>
      </div> 
    </BrowserRouter>
  );
}
 
export default App;
*/
