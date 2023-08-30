import React from "react";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faCertificate,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import CV from "../assets/Cv.pdf";

const AboutMe = () => {
  return (
    <section className="about section" id="About-me-section">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Story</span>
      <div className="about__container container grid">
        <div className="about__data">
          <div className="about__info grid">
            <div className="about__box">
              <FontAwesomeIcon icon={faComputer} />{" "}
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">3+ Years</span>
            </div>
            <div className="about__box">
              <FontAwesomeIcon icon={faFile} />
              <h3 className="about__title">Completed</h3>
              <span className="about__subtitle">10+ Projects</span>
            </div>
            <div className="about__box">
              <FontAwesomeIcon icon={faCertificate} />{" "}
              <span className="about__subtitle"> 20+</span>
              <h3 className="about__title">Awards and certification</h3>
            </div>
          </div>
          <p className="about__description">
            I am a Web Developer & Designer 🚀 | Crafting Visually Appealing &
            User-Friendly Websites | Passionate about Clean Code & Responsive
            Design | Let's Turn Your Visions into Reality! 🎨💻
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV{" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faFile} />
            </span>
          </a>
        </div>
        <div className="about__information">
          <h2 className="information__title section__title">Brief Information</h2>
          <div className="information__infos">
            <div className="information__info">
              <p>
              Name
              </p>
            </div>
            <div className="information__info">
              <p>Oluwakorede</p>
            </div>

            <div className="information__info">
              <p>
                Birthday
              </p>
            </div>
            <div className="information__info">
              <p>February 24</p>
            </div>

            <div className="information__info">
              <p>
              Mail
              </p>
            </div>
            <div className="information__info">
              <p>oladetohunoluwakorede@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
