import React from "react";
import "./Home.css";
import Social from "./Social";
import Scroll from "./Scroll";
const Home = () => {
  return (
    <section className="home section" id="home-section">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <div className="home__information">
            <h1 className="home__title">Oluwakorede</h1>
            <h3 className="home__subtitle">Web developer</h3>
            <p className="home__description">
              I am a Passionate software developer enthusiast with a strong
              focus on creating elegant and efficient solutions. Always eager to
              learn and improve my coding skills
            </p>
            <a href="#contact" className="button button--flex">
              Say Hi <span>👋</span>
            </a>
          </div>
        </div>
        <Scroll />
      </div>
    </section>
  );
};

export default Home;
