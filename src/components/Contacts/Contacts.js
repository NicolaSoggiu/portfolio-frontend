import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="container">
      <div className="title">How can you contact me?</div>
      <div className="socialLinks">
        <ul className="lyst">
          <li>
            <ul>Email : nicola.soggiu.work@gmail.com</ul>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nicola-soggiu-2860ba285/">
              Linkedin
            </a>
          </li>
          <li>
            <ul>Phone : 3515733336</ul>
          </li>
          <li>
            <a href="https://www.instagram.com/nicola.soggiu/">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/NicolaSoggiu">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contacts;
