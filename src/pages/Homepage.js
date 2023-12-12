import { useEffect, useState } from "react";
import { getProjects } from "../services/api/projects/projectsApi";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectsFromApi();
  }, []);

  const mappingProjects = (project) => {
    console.log("project", project);
    return (
      <>
        <div style={{ color: "#FAF446" }} key={project.id}>
          {project.title}
        </div>
        <img src={project.image} alt={project.title} />;
      </>
    );
  };

  const onChangeInput = (e) => {
    console.log("e", e.target.value);
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
      <div style={{ color: "#FAF446" }}>Ciao sono la homepage</div>
      {projects.map(mappingProjects)}
      {/* <Test
        // name="andrea"
        click={() => {
          console.log("clicked");
        }}
      /> */}
    </>
  );
}

// const isNameDefined = (name) => {
//   if (name) {
//     return <span>{name}</span>;
//   } else {
//     return <span>Nome non definito </span>;
//   }
// };

// const Test = ({ name, click, children }) => {
//   return (
//     <div>
//       {/* { name ? <span>{name}</span> : <span>Nome non definito</span> } */}
//       {isNameDefined(name)}
//       <span onClick={click}>Ciao sono il test</span>
//       <div>{children}</div>
//     </div>
//   );
// };

// Test.defaultProps = { name: "nicola" };

export default Homepage;
