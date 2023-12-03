import { ChakraProvider, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProjects } from "./services/api/projects/projectsApi";
import { useNavigate } from "react-router-dom";
import { routes } from "./utils/routes";
import NavBar from "./components/input/NavBar";

function App() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjectsFromApi();
  }, []);

  const mappingProjects = (project) => {
    console.log("project", project);
    return <div key={project.id}> {project.title} </div>;
  };

  const onChangeInput = (e) => {
    console.log("e", e.target.value);
  };

  const changePage = () => {
    navigate(routes.loginPage);
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
    <ChakraProvider>
      <Box bg="#121212" minHeight="100vh">
        <div className="App">
          <NavBar />
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
