import React, { useEffect, useState } from "react";
import { getProjects } from "../../services/api/projects/projectsApi";
import { Box } from "@chakra-ui/react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectsFromApi();
  }, []);

  const renderTechnologies = (tech) => {
    return <li key={tech.id}>{tech.name}</li>;
  };

  const mappingProjects = (project) => {
    console.log("project", project);
    return (
      <Box key={project.id} className="d-flex p-1">
        <div className="col-md-7">
          <div className="projTitle">{project.title}</div>
          <div className="d-flex">
            <img
              className="image"
              src={`http://localhost:8080/static/${project.image}`}
              alt={project.title}
            />
            <div className="col-md-5 ps-3">
              <h5>Descrizione :</h5>
              <p>{project.description}</p>
              <h6>Tecnlogie utilizzate: </h6>
              <ul className="list-unstyled">
                {project.technologyList.map(renderTechnologies)}
              </ul>

              <div className="d-flex flex-column align-items-start gap-2">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon className="pe-4 ps-1" icon={faDesktop} />
                    Open the website here!
                  </a>
                ) : (
                  <span></span>
                )}
                <a href={project.git}>
                  <FontAwesomeIcon
                    className="pe-3"
                    href={project.git}
                    fontSize={30}
                    icon={faSquareGithub}
                  />
                  See the code!
                </a>
              </div>
            </div>
          </div>
        </div>
      </Box>
    );
  };

  const getProjectsFromApi = async () => {
    try {
      const { data } = await getProjects();
      setProjects(data);
    } catch (error) {
      console.log("error.message", error.message);
    }
  };

  return (
    <>
      <div className="myTitle">My projects: </div>
      <div className="container containerMargin">
        <div className="row">{projects.map(mappingProjects)}</div>
      </div>
    </>
  );
};

export default Projects;
