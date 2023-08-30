import React from "react";
import scrollImg from "../assets/mouse-cursor.png";
import './Scroll.css'
const Scroll = () => {
  return (
    <>
      <div className="home__scroll" id="contact-me-section">
        <img
          src={scrollImg}
          alt="Scroll down icons created by BomSymbols - Flaticon"
          className="mouse__button"
        />
        <a
          href="#contact-me-section"
          className="home__scroll-button button--flex"
          title="scroll down icons"
        >
          Scroll down
        </a>
      </div>
    </>
  );
};

export default Scroll;