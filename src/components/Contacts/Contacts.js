import React from "react";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareEnvelope,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
  return (
    <div className="container p-2">
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
            <ul>
              <FontAwesomeIcon className="contactIcon" icon={faSquarePhone} />
              Phone : 3515733336
            </ul>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nicola-soggiu-2860ba285/">
              <FontAwesomeIcon className="contactIcon" icon={faLinkedin} />
              Linkedin profile
            </a>
          </li>
          <li>
            <a href="https://github.com/NicolaSoggiu">
              <FontAwesomeIcon className="contactIcon" icon={faSquareGithub} />
              GitHub profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contacts;
