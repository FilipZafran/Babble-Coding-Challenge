import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Intro from "./pages/Intro";
import Main from "./pages/Main";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Router path="/main">
          <Main />
        </Router>
        <Route path="/">
          <Intro />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
