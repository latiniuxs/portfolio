import React, { useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { NavLink} from "react-router-dom";
import "./Header.css"; 
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMenuOpen(false);
  };

  return (
    <Box className="header-container">
      <Box className="header-content">
        <nav className={`navigation-links ${isMenuOpen ? "open" : ""}`}>
          <button className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          <HStack className={`links ${isMenuOpen ? "open" : ""}`} spacing={8}>
            <a href="./" className="portfolio" target="">
              Portfolio
            </a>
            <div className="me-sections">
              <NavLink to="/" className="tab" onClick={() => scrollToSection("home")}>
                Home
              </NavLink>
              <NavLink to="/about" className="tab" onClick={() => scrollToSection("About-me")}>
                About Me
              </NavLink>
              <NavLink to="/projects" className="tab" onClick={() => scrollToSection("projects")}>
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className="tab"
                onClick={() => scrollToSection("contactme")}
              >
                Contact Me
              </NavLink>
            </div>
          </HStack>
        </nav>
      </Box>
    </Box>
  );
};

export default Header;