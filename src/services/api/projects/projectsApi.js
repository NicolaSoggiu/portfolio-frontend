import { getApi, postApi } from "../../api/api";

const getProjects = async () => {
  return await getApi("/api/v1/projects");
};

const getTechnologiesFromProject = async (projectId) => {
  return await getApi(`/api/v1/projects/${projectId}/technologies`);
};

const postProjects = async (obj) => {
  return await postApi("/api/v1/projects", obj);
};

export { getProjects, getTechnologiesFromProject, postProjects };
