// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://portfolio-goie.onrender.com/api",
// });

// export const getSkills = () => API.get("/skills");
// export const getProjects = () => API.get("/projects");
// export const getContact = () => API.get("/contact");

import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-goie.onrender.com/api",
});

// Backend APIs
export const getSkills = () => API.get("/skills");
export const getProjects = () => API.get("/projects");
export const getContact = () => API.get("/contact");

// Python AI Graph API
export const getGraph = () =>
  axios.get("https://portfolio-python-service.onrender.com/graph");