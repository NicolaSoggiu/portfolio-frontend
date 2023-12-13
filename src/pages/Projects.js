import { useEffect, useState } from "react";
import { getProjects } from "../services/api/projects/projectsApi";
import { Box } from "@chakra-ui/react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectsFromApi();
  }, []);

  const mappingProjects = (project) => {
    console.log("project", project);
    return (
      <Box key={project.id}>
        <div style={{ color: "#FAF446" }} key={project.id}>
          {project.title}
        </div>
        <img src={project.image} alt={project.title} />;
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
      <di style={{ color: "#FAF446" }}>My projects: </di>
      {projects.map(mappingProjects)}
    </>
  );
};

export default Projects;
