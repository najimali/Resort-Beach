import React from "react";
import "./App.css";

import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
      <Route path="/single-room" component={SingleRoom}></Route>
      <Route exact path="/rooms" component={Rooms}></Route>

      <Route exact path="/error" component={Error}></Route>
    </div>
  );
}

export default App;
