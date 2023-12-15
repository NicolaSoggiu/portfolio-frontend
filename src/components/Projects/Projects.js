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
      <div key={project.id} className="col-md-6">
        <Box>
          <div className="projTitle" key={project.id}>
            {project.title}
          </div>
          <img
            className="image"
            src={`http://localhost:8080/static/${project.image}`}
            alt={project.title}
          />
        </Box>
      </div>
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
