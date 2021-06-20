import React from "react";
import logo from "./logo.svg";
import { Map } from "./Map";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./components/Home";
import Before from "./components/Before";
import During from "./components/During";
import After from "./components/After";
// import {Layout} from "./components/Layout";
import { Error } from "./components/Error";

// leaflet css
import "leaflet/dist/leaflet.css";
// needed to make image markers work on leaflet maps with webpack bundler
// source: https://github.com/ghybs/leaflet-defaulticon-compatibility
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Residential School Visualization</h1>
        </header>
        {/* <Layout /> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/history/beforeschools" component={Before} />
          <Route path="/history/duringschools" component={During} />
          <Route path="/history/afterschools" component={After} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
