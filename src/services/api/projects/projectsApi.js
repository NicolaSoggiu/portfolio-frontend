import { getApi, postApi } from "../../api/api";

const getProjects = async () => {
  return await getApi("/api/v1/projects");
};

const postProjects = async (obj) => {
  return await postApi("/api/v1/projects", obj);
};

export { getProjects, postProjects };
