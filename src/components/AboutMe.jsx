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
      <div className="about__container container grid">
        <div className="about__data">
      <h3 className="about__content-title">Brief About Me</h3>
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
        <div className="about__content-skills">
        <h3 className="about__content-title">Skills</h3>
        <div className="skills">
          <div className="skills__skill">HTML</div>
          <div className="skills__skill">CSS</div>
          <div className="skills__skill">JavaScript</div>
          <div className="skills__skill">React</div>
          <div className="skills__skill">GIT</div>
          <div className="skills__skill">Python</div>
          <div className="skills__skill">Wordpress</div>

        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;
