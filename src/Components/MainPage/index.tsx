import React from "react";
import Horoscope from "../Horoscope/index";
import "./style.css";

const HoroscopeHero: React.FC = () => {
  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#horoscopes">Horoscopes</a>
          <a href="#tarot">Tarot</a>
          <a href="#compatibility">Compatibility</a>
          <a href="#shop">Shop</a>
        </div>
        <button className="join-button">Join Now</button>
      </nav>

      <div className="hero-content">
        <div className="left-illustration">
          <img
            src="https://images.pond5.com/illustration-libra-zodiac-sign-element-illustration-202077162_iconl.jpeg"
            alt="Illustration 1"
            className="illustration"
          />
        </div>

        <div className="hero-text">
          <h1>Your Daily Horoscopes</h1>
          <div className="elements-for">
            <h2>Elements for 2024</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>

        <div className="right-illustration">
          {/* <img
            src="https://i.pinimg.com/736x/c3/9a/13/c39a132b34b499e33ad89b06276ba343.jpg"
            alt="Illustration 2"
            className="illustration"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HoroscopeHero;
