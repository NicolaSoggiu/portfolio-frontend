import { useEffect, useState } from "react";
import {
  getProjects,
  getTechnologiesFromProject,
} from "../../services/api/projects/projectsApi";
import { Box } from "@chakra-ui/react";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectsFromApi();
    getTechnologiesFromProject();
  }, []);

  const renderTechnologies = (technologies) => {
    let content = '<ul class="list-unstyled">';
    technologies.forEach((tech) => {
      content += `<li>${tech.name}</li>`;
    });
    content += "</ul>";
    return content;
  };

  const mappingProjects = async (project) => {
    console.log("project", project);
    const technologies = await getTechnologiesFromProject(project.id);
    return (
      <>
        <Box className="d-flex p-1">
          <div key={project.id} className="col-md-7">
            <div className="projTitle" key={project.id}>
              {project.title}
            </div>
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
                <div>{renderTechnologies(technologies)}</div>
              </div>
            </div>
          </div>
        </Box>
      </>
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
      <div className="container">
        <div className="row">{projects.map(mappingProjects)}</div>
      </div>
    </>
  );
};

export default Projects;
