import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="container p-2">
      <div className="mt-3">
        <h1>Jr Full Stack Web Developer Trainee at Experis Academy</h1>
        <h4>September 2023 - November 2023</h4>
        <h5 className="pb-4">Milan, Italy</h5>
        <span>
          Intensive six-week course of approximately 240 hours aimed at learning
          the Java programming language. I acquired the ability to create
          software using Java as the main language, using object-oriented
          programming (OOP) and its most used libraries and frameworks, such as
          Spring Framework and Hibernate. I have developed projects using Java,
          OOP, Spring Boot, Thymeleaf, Maeven and MySQL.
        </span>
      </div>

      <h1 className="mt-5">Jr Full Stack Web Developer Trainee at Boolean</h1>
      <h4>February 2023 - September 2023</h4>
      <h5 className="pb-4">Milan, Italy</h5>
      <span>
        Six month full time course for full stack developer. During the course I
        learned to: create complex site layouts from scratch with HTML and CSS,
        implement the layout with interactive elements with JavaScript, create
        web apps using VueJs, object-oriented programming with PHP, designing
        and querying the database with MySQL, program with the PHP Laravel
        framework;
      </span>
    </div>
  );
};

export default Experience;
