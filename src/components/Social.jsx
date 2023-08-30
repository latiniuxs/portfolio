import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
  } from "@fortawesome/free-brands-svg-icons";

  const socials = [
    {
      icon: faEnvelope,
      url: "mailto:oladetohunoluwakorede@gmail.com",
    },
    {
      icon: faGithub,
      url: "https://github.com/oladetohun1",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com",
    },
    {
      icon: faMedium,
      url: "https://medium.com",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com",
    },
  ];
const Social = () => {
    return (
        <div className="home__socials">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className='home__icons home__socials' icon={social.icon} size="1.25"   color='#100720' />
              </a>
            ))}
        </div>
    )
}
export default Social
