import React, { Component } from "react";
import logo from "../src/images/B-logo_round.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Babbel coding challenge for Filip Žafran</h3>
        <h5> date: 15 April 2020</h5>
        <h6>...well don't just stand there, click on the logo...</h6>
      </header>
    </div>
  );
}

export default App;
