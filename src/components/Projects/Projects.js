import { useEffect, useState } from "react";
import { getProjects } from "../../services/api/projects/projectsApi";
import { Box } from "@chakra-ui/react";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectsFromApi();
  }, []);

  const mappingProjects = (project) => {
    console.log("project", project);
    return (
      <Box key={project.id}>
        <div className="projTitle" key={project.id}>
          {project.title}
        </div>
        <img
          className="image"
          src={`http://localhost:8080/static/${project.image}`}
          alt={project.title}
        />
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
      <Box className="container">
        <div className="projects">{projects.map(mappingProjects)}</div>
      </Box>
    </>
  );
};

export default Projects;
