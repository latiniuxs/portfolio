import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        <a href="https://github.com/latiniuxs" target="_blank" rel="noopener noreferrer">
          by Latiniux
        </a>
        &copy; {currentYear} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
