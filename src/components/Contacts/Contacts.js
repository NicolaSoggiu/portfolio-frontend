import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="containerC">
      <div className="card">
        <p>
          <a href="https://www.linkedin.com/in/nicola-soggiu-2860ba285/">
            <span className="rotate">Linkedin</span>
          </a>
        </p>
        <p>
          <a href="https://github.com/NicolaSoggiu">
            <span className="rotate">Github</span>
          </a>
        </p>
        <p>
          <a href="#">
            <span className="rotate">Phone </span>
            <div className="contact-info">3515733336</div>
          </a>
        </p>
        <p>
          <a href="#">
            <span className="rotate">Email</span>
            <span className="contact-info">nicola.soggiu.work@gmail.com</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
