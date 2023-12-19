import React from "react";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareEnvelope,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons"; // for example, a solid icon
import {
  faSquareGithub,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // use free-brands-svg-icons for brand icons

const Contacts = () => {
  return (
    <div className="container">
      <div className="title">How can you contact me?</div>
      <div className="socialLinks">
        <ul className="lyst">
          <li>
            <ul>
              <FontAwesomeIcon
                className="contactIcon"
                icon={faSquareEnvelope}
              />
              Email : nicola.soggiu.work@gmail.com
            </ul>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nicola-soggiu-2860ba285/">
              <FontAwesomeIcon className="contactIcon" icon={faLinkedin} />
              Linkedin
            </a>
          </li>
          <li>
            <ul>
              <FontAwesomeIcon className="contactIcon" icon={faSquarePhone} />
              Phone : 3515733336
            </ul>
          </li>
          <li>
            <a href="https://www.instagram.com/nicola.soggiu/">
              <FontAwesomeIcon
                className="contactIcon"
                icon={faSquareInstagram}
              />
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/NicolaSoggiu">
              <FontAwesomeIcon className="contactIcon" icon={faSquareGithub} />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contacts;
