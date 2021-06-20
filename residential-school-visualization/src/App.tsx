import React from "react";
import { Home } from "./components/Home";

const App: React.FC = () => {
  return (
    <div>
      <Home/>
    </div>
  );
}
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