import React from "react";
import UIfx from "uifx";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import logo from "../images/B-logo_round.png";
import babbelPlus from "../images/babel-logo_text.png";
import soundEffect from "../effects/babbel-sound.mp3";

const babbleSound = new UIfx(soundEffect);

const Intro = () => (
  <header className="App-header">
    <Link to="/main">
      <img
        src={logo}
        className="Babbel-logo"
        alt="logo"
        onClick={() => {
          babbleSound.play();
        }}
      />
    </Link>

    <h3>
      {" "}
      <img src={babbelPlus} className="babbelText" />
      Babbel JavaScript challenge for Filip Žafran
    </h3>

    <h5> date: 15 April 2020</h5>
    <FadeIn delay="3000">
      <h6>...well don't just sit there, click on the logo...</h6>
    </FadeIn>
  </header>
);

export default Intro;
