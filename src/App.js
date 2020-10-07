import React from "react";
import "./App.css";

import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/rooms/:slug" component={SingleRoom}></Route>
        <Route exact path="/rooms" component={Rooms}></Route>
        {/* When no path matches then Error page will show  */}
        <Route component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
