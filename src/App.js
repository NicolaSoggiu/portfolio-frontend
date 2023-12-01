import "./App.css";
import { useEffect, useState } from "react";
import { getProjects } from "./services/api/projects/projectsApi";
import Input from "./components/input/Input";
import { useNavigate } from "react-router-dom";
import { routes } from "./utils/routes";

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
    <div className="App">
      {projects && projects.map(mappingProjects)}
      <Input typeInput="text" onChangeInput={onChangeInput} />
      <Input typeInput="password" onChangeInput={onChangeInput} />
      <button onClick={changePage}>Click</button>
    </div>
  );
}

export default App;
